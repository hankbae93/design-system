# Design-system

## 절대경로 세팅

```zsh
yarn add @craco/craco

yarn add craco-alias -D
```

- package.json

```ts
{
	...
	"scripts": {
		"start": "craco start",
		"build": "craco build",
		"test": "craco test",
	},
    ...
}
```

- tsconfig.paths.json

```ts
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "pages/*": ["src/pages/*"],
      "components/*": ["src/components/*"],
      "styles/*": ["src/styles/*"]
    }
  }
}
```

```ts
// src/craco.config.js
const CracoAlias = require("craco-alias");

module.exports = {
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: "tsconfig",
				tsConfigPath: "tsconfig.paths.json",
			},
		},
	],
};
```

두번째로 storybook이 tsconfig의 경로를 참조하지않고 정신을 못차릴 때 해당 플러그인을 설치해주고 .storybook의 main.js를 수정해준다.

```js
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
	...,
	webpackFinal: async (config, { configType }) => {
		config.resolve.plugins = [new TsconfigPathsPlugin()];
		return config;
	},
};
```
