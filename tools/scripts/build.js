const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/apps/components/runtime-es2015.js',
    './dist/apps/components/polyfills-es2015.js',
    // './dist/apps/components/scripts-es2015.js',
    './dist/apps/components/main-es2015.js'
  ];
  await fs.ensureDir('elements');
  await concat(files, 'elements/elements.js');
  await fs.copyFile(
    './dist/apps/components/styles.css',
    'elements/styles.css'
  );
  // await fs.copy('./dist/apps/components/assets/', 'elements/assets/');
})();
