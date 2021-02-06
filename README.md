# vue-project-template

## Vue3 + Vite + Tailwind CSS + Router + Vuex

## Create Vite Project

```sh
npm init @vitejs/app
```

## [Install Tailwind CSS](https://tailwindcss.com/docs/guides/vue-3-vite)

```sh
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
```

```sh
npx tailwindcss init -p
```

```sh
purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
```

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```js
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
```

### Deps

```sh
yarn add axios element-plus vue-router@next vuex@next
```
