// Polyfill for Node.js v22+ which exposes localStorage as a global stub object
// but without a backing file its methods are undefined, breaking SSR.
export function register() {
  if (typeof localStorage !== 'undefined' && typeof localStorage.getItem !== 'function') {
    const store = {};
    globalThis.localStorage = {
      getItem: (key) => store[key] ?? null,
      setItem: (key, value) => { store[key] = String(value); },
      removeItem: (key) => { delete store[key]; },
      clear: () => { for (const k in store) delete store[k]; },
      get length() { return Object.keys(store).length; },
      key: (index) => Object.keys(store)[index] ?? null,
    };
  }
}

