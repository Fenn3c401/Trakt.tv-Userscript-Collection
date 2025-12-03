#!/bin/bash
set -euo pipefail
shopt -s nullglob


REPO_SLUG=${1:?Error: Repository slug not provided. Exiting.}
BASE_URL="https://github.com/$REPO_SLUG"
BASE_URL_RAW="https://raw.githubusercontent.com/$REPO_SLUG/main"

SRC_DIR='userscripts/src'
META_DIR='userscripts/meta'
DIST_DIR='userscripts/dist'
DOCS_DIR='userscripts/docs'
SCREENSHOTS_DIR='userscripts/docs/screenshots'


printf 'Initializing build environment\n'
npm install --save-dev esbuild cloc > /dev/null


printf 'Removing old build artifacts\n'
mkdir -p "$META_DIR" "$DIST_DIR" "$DOCS_DIR" "$SCREENSHOTS_DIR"
find "$META_DIR" "$DIST_DIR" "$DOCS_DIR" -maxdepth 1 -type f -delete


printf 'Creating temp files for README.md update\n'
BEFORE_TABLE_FILE=$(mktemp)
AFTER_TABLE_FILE=$(mktemp)
TABLE_CONTENT_FILE=$(mktemp)

start_line=$(grep -n -m 1 '## Userscripts' README.md | cut -d : -f 1)
head -n "$start_line" README.md > "$BEFORE_TABLE_FILE"

end_line=$(tail -n +$((start_line + 1)) README.md | grep -n -m 1 -v '^|' | cut -d : -f 1)
[[ -n "$end_line" ]] && tail -n +$((start_line + end_line)) README.md > "$AFTER_TABLE_FILE"

( printf '| *NAME* | *VERSION* | *LOC* | *INSTALL* |\n'
  printf '|:---|:---|:---|:---|\n'
) > "$TABLE_CONTENT_FILE"


printf 'Starting to process userscripts in %s...\n' "$SRC_DIR"
declare -i userscript_count=$(find "$SRC_DIR" -name "*.user.js" | wc -l)
declare -i loc_count_total=0
declare -a ms_ids
declare -A ms_store

for file in "$SRC_DIR"/*.user.js; do
  id=$(basename "$file" .user.js)
  printf '>> Processing ID: %s\n' "$id"


  if [[ "$id" = 'zzzzzzzz' ]]; then
    printf '   0. Generating src file for megascript\n'
    cat > "$file" << EOF
// ==UserScript==
// @name         Trakt.tv | Megascript
// @description  All $((userscript_count - 1)) userscripts from my "Trakt.tv Userscript Collection" repo merged into one for convenience.
// @version      $(date '+%Y-%m-%d_%H-%M')
// @namespace    zzzzzzzz
$(grep -m 1 '// @icon' <<< "${ms_store["${ms_ids[0]}.header"]}")
$(grep '// @match' <<< "${ms_store["${ms_ids[0]}.header"]}")
$(grep -m 1 '// @run-at' <<< "${ms_store["${ms_ids[0]}.header"]}")
$(for id in "${ms_ids[@]}"; do printf '%s\n' "${ms_store["$id.header"]}"; done \
  | grep -E '^// @(resource|require|grant|connect)' \
  | sort -u \
  | awk '
      /^\/\/ @resource/ {key="a"}
      /^\/\/ @require/  {key="b"}
      /^\/\/ @grant/    {key="ca"; if ($0 ~ /GM_/) key="cb"; if ($0 ~ /GM\./) key="cc"}
      /^\/\/ @connect/  {key="d"}
      {print key $0}
    ' \
  | sort \
  | sed -E 's|^[a-z]+||')
// ==/UserScript==

/* README
### General
- You can turn off individual modules by setting the corresponding script-id to \`false\` in the userscript storage tab *(note: only displayed after first run)*.
- This userscript is automatically generated. YMMV.

| *NAME* | *SCRIPT_ID* |
| :----- | :---------- |
$(for id in "${ms_ids[@]}"; do printf '| [%s](%s) | `%s` |\n' "$(sed 's#|#\\|#g' <<< "${ms_store["$id.script_name"]}")" "$id.md" "$id"; done | sort)
*/

$(for id in "${ms_ids[@]}"; do
  printf '/* [%s]\n' "${ms_store["$id.script_name"]}"
  printf '%s\n' "${ms_store["$id.script_description"]}" 
  [[ -n "${ms_store["$id.readme_comment"]}" ]] && printf '\n%s\n' "$(sed '1d;$d' <<< "${ms_store["$id.readme_comment"]}")"
  printf '*/\n\n'
done)

'use strict';

const gmStorage = { $(for id in "${ms_ids[@]}"; do printf "'%s': true, " "$id"; done)...(GM_getValue('megascript')) };
GM_setValue('megascript', gmStorage);
$(for id in "${ms_ids[@]}"; do printf "\n\ngmStorage['%s'] && (async () => {\n%s\n})();\n" "$id" "${ms_store["$id.body"]}"; done)
EOF
  fi


  printf '   1. Parsing src file\n'
  clean_content="$(tr -d '\r' < "$file")"
  script_name="$(grep -m 1 '^// @name' <<< "$clean_content" | sed -E 's|// @name\s+||')"
  script_description="$(grep -m 1 '^// @description' <<< "$clean_content" | sed -E 's|// @description\s+||')"
  script_version="$(grep -m 1 '^// @version' <<< "$clean_content" | sed -E 's|// @version\s+||')"
  script_namespace="$(grep -m 1 '^// @namespace' <<< "$clean_content" | sed -E 's|// @namespace\s+||')"
  header="$(sed -n '\|^// ==UserScript==$|,\|^// ==/UserScript==$|p' <<< "$clean_content")"
  readme_comment="$(sed -n '\|^/\* README$|,\|^\*/$|p' <<< "$clean_content")"
  body="$(sed '\|^// ==UserScript==$|,\|^// ==/UserScript==$|d; \|^/\* README$|,\|^\*/$|d' <<< "$clean_content" | sed -n '\|[^\s]|,$p')"
  screenshots="$(find "$SCREENSHOTS_DIR" -type f -name "$id-*.*" -printf '%f\n' | sort)"

  [[ "$id" != "${script_namespace##*/}" ]] && { printf 'Error: Userscript ID from filename does not match ID from namespace. Exiting.\n' >&2; exit 1; }

  if [[ "$id" != 'zzzzzzzz' ]]; then
    ms_ids+=("$id")
    ms_store["$id.script_name"]="$script_name"
    ms_store["$id.script_description"]="$script_description"
    ms_store["$id.script_version"]="$script_version"
    ms_store["$id.header"]="$header"
    ms_store["$id.readme_comment"]="$readme_comment"
    ms_store["$id.body"]="$body"
  fi


  printf '   2. Generating dist and meta files\n'
  header="$(sed \
    -e '\|// @description| s|$|'"$([[ -n "$readme_comment$screenshots" ]] && printf '%s' ' See README for details.')"'|' \
    -e '\|// @namespace|d' \
    -e '\|// @author|d' \
    -e '\|// @license|d' \
    -e '\|// @homepageURL|d' \
    -e '\|// @supportURL|d' \
    -e '\|// @updateURL|d' \
    -e '\|// @downloadURL|d' \
    -e '\|// @version|a\
// @namespace    '"${BASE_URL%/*}"'\
// @author       '"${REPO_SLUG%/*}"'\
// @license      GPL-3.0-or-later\
// @homepageURL  '"$BASE_URL"'#readme\
// @supportURL   '"$BASE_URL"'/issues\
// @updateURL    '"$BASE_URL_RAW/$META_DIR/$id.meta.js" <<< "$header")"

  DOWNLOAD_URL_DIST="$BASE_URL_RAW/$DIST_DIR/$id.user.js"
  DOWNLOAD_URL_DIST_MIN="$BASE_URL_RAW/$DIST_DIR/$id.min.user.js"
  header_dist="$(sed "\|// @updateURL|a\// @downloadURL  $DOWNLOAD_URL_DIST" <<< "$header")"
  header_dist_min="$(sed "\|// @updateURL|a\// @downloadURL  $DOWNLOAD_URL_DIST_MIN" <<< "$header")"
  middle_content="${readme_comment:+$'\n\n'"$readme_comment"}"$'\n\n\n'
  minified_body="$(npx esbuild --minify --loader=js <<< "$body")"

  printf '%s' "$header" > "$META_DIR/$id.meta.js"
  printf '%s%s%s' "$header_dist" "$middle_content" "$body" > "$DIST_DIR/$id.user.js"
  printf '%s%s%s' "$header_dist_min" "$middle_content" "$minified_body" > "$DIST_DIR/$id.min.user.js"


  printf '   3. Generating doc file\n'
  version_slug=$(sed 's|_|__|g; s|-|--|g' <<< "$script_version")
  loc_count=$(npx cloc --quiet --sum-one --stdin-name="$id.user.js" - <<< "$body" | grep -m 1 'SUM:' | awk '{print $5}')
  [[ "$id" != 'zzzzzzzz' ]] && ((loc_count_total += loc_count))

  install_badge="[![install standard](https://img.shields.io/badge/install-standard-006400)]($DOWNLOAD_URL_DIST)"
  install_min_badge="[![install minified](https://img.shields.io/badge/install-minified-64962a)]($DOWNLOAD_URL_DIST_MIN)"
  version_badge="[![version](https://img.shields.io/badge/version-$version_slug-blue)](../../../../blame/main/$DIST_DIR/$id.user.js)"
  loc_count_badge="[![lines of code](https://img.shields.io/badge/loc-$loc_count-orange)](../../$DIST_DIR/$id.user.js)"

  ( printf '# %s\n%s\n\n' "$script_name" "$script_description"
    printf '%s\n%s\n%s\n%s\n\n' "$install_badge" "$install_min_badge" "$version_badge" "$loc_count_badge"
    printf '%s' "${readme_comment:+$'## Info\n'"$(sed '1d;$d' <<< "$readme_comment")"$'\n\n'}"
    printf '%s' "${screenshots:+$'## Screenshots\n<p align="center">\n'"$(sed -E 's|(.*)|  <img src="screenshots/\1" alt="screenshot" align="middle">|' <<< "$screenshots")"$'\n</p>'}"
  ) > "$DOCS_DIR/$id.md"

  ( [[ -n "$readme_comment$screenshots" ]] && printf '%s' "# [README]($BASE_URL/blob/main/$DOCS_DIR/$id.md)"$'\n\n'
    printf '%s\n' "Click [HERE]($BASE_URL#readme) for general info, requirements and a full list of all my Trakt.tv userscripts."
  ) > "$DOCS_DIR/$id-gf.md"


  printf '   4. Adding row to README.md table\n'
  escaped_script_name="$(sed 's#|#\\|#g' <<< "$script_name")"
  install_links="[Standard]($DOWNLOAD_URL_DIST) // [Minified]($DOWNLOAD_URL_DIST_MIN)"
  printf '| [%s](%s) | `%s` | `%s` | %s |\n' "$escaped_script_name" "$DOCS_DIR/$id.md" "$script_version" "$loc_count" "$install_links" >> "$TABLE_CONTENT_FILE"
done


printf 'Finalizing README.md\n'
( cat "$BEFORE_TABLE_FILE" | sed -E "s|(/badge/loc-)[0-9]+|\1$loc_count_total|; s|(/badge/userscripts-)[0-9]+|\1$userscript_count|"
  head -n 2 "$TABLE_CONTENT_FILE"
  sed -n '\|zzzzzzzz|p' "$TABLE_CONTENT_FILE"
  sed '1,2d; \|zzzzzzzz|d' "$TABLE_CONTENT_FILE" | sort
  cat "$AFTER_TABLE_FILE"
) > README.md

printf 'Removing temp files\n'
rm -f "$BEFORE_TABLE_FILE" "$AFTER_TABLE_FILE" "$TABLE_CONTENT_FILE"

printf 'Build process completed successfully!\n'
