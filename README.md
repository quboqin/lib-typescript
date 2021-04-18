# Building and publishing an npm typescript package

1. 创建目录

```shell
mkdir lib-typescript && cd lib-typescript
```

2. 初始化 git 仓库

```shell
git init
git checkout -b main
echo "# Building and publishing an npm typescript package" >> README.md
git add . && git commit -m "Initial commit"
```

3. 初始化 npm 项目

```shell
npm init -y
echo "node_modules" >> .gitignore
npm install --save-dev typescript
```

4. 配置 tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "outDir": "./lib",
    "sourceMap": true,
    "strict": true,
    "noImplicitAny": true,
    "declaration": true,
    "strictPropertyInitialization": false,
    "experimentalDecorators": true /* Enables experimental support for ES7 decorators. */,
    "emitDecoratorMetadata": true /* Enables experimental support for emitting type metadata for decorators. */
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/__tests__/*"]
}
```

5.ignore /lib

```shell
echo "/lib" >> .gitignore
```

# 配置 eslint

1. 安装 eslint 和 typescript 相关依赖

```shell
npm i eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
```

2. 创建 .eslintrc.js

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
}
```

3. 安装 prettier

```shell
npm i prettier eslint-config-prettier eslint-plugin-prettier -D
```

4. 创建 .prettierrc.js

```javascript
module.exports = {
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
}
```

5. 配置 vscode workspace

6. 添加 .eslintignore
```
node_modules
/lib
```

#  配置 npm 库的输出文件
However, blacklisting files is not a good practice. Every new file/folder added to the root, needs to be added to the .npmignore file as well! Instead, you should whitelist the files /folders you want to publish. This can be done by adding the files property in package.json:
``` json
  "files": [
    "lib/**/*"
  ],
```

# Setup Testing with Jest
1. 安装 Jest
``` shell
npm install --save-dev jest ts-jest @types/jest
```
2. Create a new file in the root and name it jestconfig.json:
``` json
{
  "transform": {
    "^.+\\.(t|j)sx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"]
}
```

3. Remove the old test script in package.json and change it to:
``` json
"test": "jest --config jestconfig.json",
```

4. Write a basic test
In the src folder, add a new folder called __tests__ and inside, add a new file with a name you like, but it has to end with test.ts, for example greeter.test.ts
``` typescript
import { Greeter } from '../index';
test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});
```
then try to run 
``` shell
npm test
```

# Use the magic scripts in NPM
``` json
    "prepare": "npm run build",
    "prepublishOnly": "npm test && npm run lint",
    "preversion": "npm run lint",
    "version": "git add -A src",
    "postversion": "git push && git push --tags",
    "patch": "npm version patch && npm publish"
```

# Updating your published package version number
1. To change the version number in package.json, on the command line, in the package root directory, run the following command, replacing <update_type> with one of the semantic versioning release types (patch, major, or minor):

npm version <update_type>
2. Run npm publish.