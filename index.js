(() => {
  const INTRO_TEXT = "whoami";
  const TYPE_SPEED_MS = 90;
  const REST_DELAY_MS = 350;
  const CURSOR_BLINK_MS = 500;

  const typedTextEl = document.getElementById("typed-text");
  const introCursorEl = document.getElementById("intro-cursor");
  const restEl = document.getElementById("rest");
  const footerCursorEl = document.getElementById("footer-cursor");
  const themeToggleEl = document.getElementById("theme-toggle");

  function typeIntro() {
    let typedLen = 0;
    const timer = setInterval(() => {
      typedLen += 1;
      typedTextEl.textContent = INTRO_TEXT.slice(0, typedLen);

      if (typedLen >= INTRO_TEXT.length) {
        clearInterval(timer);
        introCursorEl.classList.remove("cursor--blink");
        setTimeout(() => {
          restEl.hidden = false;
          requestAnimationFrame(() => restEl.classList.add("is-visible"));
        }, REST_DELAY_MS);
      }
    }, TYPE_SPEED_MS);
  }

  function blinkFooterCursor() {
    let cursorOn = true;
    setInterval(() => {
      cursorOn = !cursorOn;
      footerCursorEl.style.opacity = cursorOn ? "1" : "0";
    }, CURSOR_BLINK_MS);
  }

  function initThemeToggle() {
    themeToggleEl.addEventListener("click", () => {
      const isLight = document.documentElement.dataset.theme === "light";
      document.documentElement.dataset.theme = isLight ? "dark" : "light";
      themeToggleEl.textContent = isLight ? "light" : "dark";
    });
  }

  typeIntro();
  blinkFooterCursor();
  initThemeToggle();
})();
