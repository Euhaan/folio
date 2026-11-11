// Light, dark or whatever the phone is set to. A plain script in <head>, so the colours are right
// before anything is drawn. The choice stays in this browser only; where storage is off (the
// Android app) it lasts until the app closes.
(() => {
  const KEY = 'folio-theme';
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const COLORS = { light: '#f6f3ec', dark: '#101118' };

  const saved = () => {
    try {
      return localStorage.getItem(KEY);
    } catch {
      return null;
    }
  };
  let mode = saved() === 'light' || saved() === 'dark' ? saved() : 'system';

  function apply() {
    const theme = mode === 'system' ? (system.matches ? 'dark' : 'light') : mode;
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', COLORS[theme]);
    document.querySelector('meta[name="color-scheme"]')?.setAttribute('content', theme);
    window.dispatchEvent(new CustomEvent('folio-theme'));
  }

  system.addEventListener('change', () => { if (mode === 'system') apply(); });

  window.folioTheme = {
    get mode() { return mode; },
    get theme() { return document.documentElement.dataset.theme; },
    set(next) {
      mode = next;
      try {
        if (next === 'system') localStorage.removeItem(KEY);
        else localStorage.setItem(KEY, next);
      } catch {
        // Private window or storage turned off: the choice just won't outlive this visit.
      }
      apply();
    },
  };
  apply();
})();
