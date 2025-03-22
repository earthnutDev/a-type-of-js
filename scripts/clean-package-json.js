/** **  ** ** ** ** ** ** ** ** ** ****
 *  @Author earthnut
 *  @Email earthnut.dev@outlook.com
 *  @ProjectName a-type-of-js
 *  @FileName clean-package-json.js
 *  @CreateDate  周六  03/22/2025
 *  @Description 动态构建 package.json，移除不需要的 scripts、devDependencies 等
 **/
import { pathJoin, readFileToJsonSync } from 'a-node-tools';
import { writeFileSync } from 'node:fs';

const packageJson = readFileToJsonSync('./package.json');

delete packageJson.scripts;
delete packageJson.devDependencies;

const distPath = pathJoin(process.cwd(), './dist/package.json');

writeFileSync(distPath, JSON.stringify(packageJson, null, 2));
