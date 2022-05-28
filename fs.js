/** File system
 * The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
 * All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM).
 */

const { log } = require('console');
const { unlink, open, FileHandle } = require('fs/promises');

(async function(path) {
    try {
      await unlink(path);
      console.log(`successfully deleted ${path}`);
    } catch (error) {
      console.error('there was an error:', error.message);
    }
  })('/tmp/hello');

//   let filehandle;
// try {
//   filehandle = await open('package.json', 'r');
// } finally {
//   await filehandle?.close();
// }

// 
const { watch } = require('fs/promises');

const ac = new AbortController();
const { signal } = ac;
setTimeout(() => ac.abort(), 10000);

(async () => {
  try {
    const watcher = watch(__filename, { signal });
    for await (const event of watcher)
      console.log(event);
  } catch (err) {
    if (err.name === 'AbortError')
      return;
    throw err;
  }
})();