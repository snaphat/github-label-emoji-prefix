# 🐞 GitHub Label Emoji Prefixer 🪲

## About

Userscript that adds label-specific emoji prefixes to GitHub issue and pull request titles for improved visual scanning in list views.

- Works on the main issue and pull request list pages.
- Supports a variety of common labels such as `bug`, `documentation`, `performance`, etc.
- Multiple labels per item are supported based on configuration.

## Userscript Installation

### Step 1: Install a user-script manager

* Chrome Users:
  * Install [ViolentMonkey](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag), or [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
* Edge Users:
  * Install [ViolentMonkey](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao), or [TamperMonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd).
* Opera Users:
  * Install [TamperMonkey](https://addons.opera.com/en/extensions/details/tampermonkey-beta/).
* Firefox Users:
  * Install [GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/), [ViolentMonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/), or [TamperMonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/).

### Step 2: Install the script

* Click [here](https://raw.githubusercontent.com/snaphat/github-label-emoji-prefixer/main/github-label-emoji-prefixer.user.js) to install the script.

## Notes

- Script observes DOM changes to handle dynamic page updates.
- Label-to-emoji mapping is customizable in the `LABEL_PREFIXES` object.
- Operates in `"multiple"` mode by default, prefixing all matched labels.
