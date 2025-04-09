import {
  pathJoin,
  readFileToJsonSync,
  getDirectoryBy,
  writeJsonFile,
} from 'a-node-tools';

const packageJson = readFileToJsonSync('./package.json');

const deleteKeys = ['scripts', 'devDependencies', 'lint-staged', 'private'];

deleteKeys.forEach(key => {
  delete packageJson[key];
});

const distPath = getDirectoryBy('dist', 'directory');

const distPackagePath = pathJoin(distPath, './dist/package.json');

writeJsonFile(distPackagePath, packageJson);
