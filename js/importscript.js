// usage:
//   importScript('./path/to/script.js').then((allExports) => { .... }));
// https://gist.github.com/samthor/3ff82bd5b11314fec2e1826d4a96ce7c
// 
function importScript(path) {
  let entry = window.importScript.__db[path];
  if (entry === undefined) {
    const escape = path.replace(`'`, `\\'`);
    const script = Object.assign(document.createElement('script'), {
      type: 'module',
      textContent: `import * as x from '${escape}'; importScript.__db['${escape}'].resolve(x);`,
    });
    entry = importScript.__db[path] = {};
    entry.promise = new Promise((resolve, reject) => {
      entry.resolve = resolve;
      script.onerror = reject;
    });
    document.head.appendChild(script);
    script.remove();
  }
  return entry.promise;
}
importScript.__db = {};
window['importScript'] = importScript;  // needed if we ourselves are in a module