// ==UserScript==
// @name         GitHub Label Emoji Prefixer
// @namespace    https://github.com/snaphat/github-label-emoji-prefix
// @version      0.1.0
// @author       Aaron Landwehr
// @description  Prefixes GitHub issue and pull request titles with label-specific emojis for faster visual scanning in list views.
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

"use strict";

(function () {
  // Mode: "single" = first match only, "multiple" = all matches
  const MODE = "multiple"; // "single" or "multiple"

  /* eslint-disable no-multi-spaces */
  const LABEL_PREFIXES = {
    "bug": "🐞",              // 🛑🐛🪼🐝🦗🦠🪰🦟🕸🦋🪳🕷🐞🪲🐜🐌👾👻💣👺👹😈👿😡
    "code improvement": "📝", // 📃📝✏✒🖋🖊🖌🖍
    "documentation": "📘",    // 📖📕📗📙📘📚📔📓📒
    "duplicate": "👯‍♀️",        // 👥🪞👯👯‍♂️👯‍♀️🧑‍🤝‍🧑
    "improvement": "💫",      // 🪜🏗️⚙️🧰🪛🪚🔧🔨🪓💫🔅🔆🪸
    "invalid": "❌",          // ❌⛔
    "new feature": "🌟",      // 🌟✨🆕🧩🚀
    "new level": "🏝",         // 🏝
    "organization": "🗄️",     // 🧹🗄️💼🗂🗃
    "performance": "⌚",      // 🎠🏇🐎🏄🏂🐆🐅🐴🦄🫏⌚📈
    "polish": "👗",           // 💄👗🎨💎♦️♠️♥️♣️💅
    "repo-improvement": "🛢️", // 🛢️🔩
    "research": "🔬",         // 🔬🔭💡🔦
    "testing": "🧪",          // ⚗🧪🔍🧫🧬
    "tooling": "🔧",          // 🔧
    "wontfix": "🤷‍♂️",          // 🤷‍
  };
  /* eslint-enable no-multi-spaces */

  function prefixLabels() {
    const titleLinks = document.querySelectorAll(
      'a[data-testid="issue-pr-title-link"], a.Link--primary.markdown-title'
    );

    titleLinks.forEach((titleLink) => {
      if (titleLink.dataset.labelPrefixed) return;

      // Container depends on page type
      const container = titleLink.closest(
        "li, div.js-issue-row, div.flex-auto"
      );
      if (!container) return;

      const labelElements = container.querySelectorAll("span, a");

      const foundLabels = new Set();
      labelElements.forEach((el) => {
        const txt = el.textContent.trim().toLowerCase();
        if (LABEL_PREFIXES.hasOwnProperty(txt)) {
          foundLabels.add(txt);
        }
      });

      if (foundLabels.size === 0) return;

      const selected = MODE === "single" ? [Array.from(foundLabels)[0]] : Array.from(foundLabels);

      const emojis = selected.map((label) => LABEL_PREFIXES[label]);
      titleLink.textContent = `${emojis.join("")} ${titleLink.textContent.trim()}`;
      titleLink.dataset.labelPrefixed = "true";
    });
  }

  prefixLabels();
  const observer = new MutationObserver(prefixLabels);
  observer.observe(document.body, { childList: true, subtree: true });
})();
