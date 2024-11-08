# Portfolio site built with Nuxt 3

Nuxt allows the development of static sites using Vue, with:
- Markdown files for the content
- file-based routing.

This project is an experimental WIP for the next iteration of the Double-E Design website. The below docs are mainly for my future self, but if they (and the associated scripts and whatnot) help you, enjoy!

## Table of contents
- [Getting started](#getting-started)
- [New components](#new-components)
  - [Global CSS](#global-css)
  - [SCSS variables/mixins/functions](#scss-variablesmixinsfunctions)
  - [Custom directives](#custom-directives)
- [New pages](#new-pages)
- [Production builds](#production-builds)
- [Useful links](#useful-links)

--- 
## Getting started

Install the dependency things:

```bash
npm install
```

Run the thing in dev mode:

```bash
npm run dev
```

---
## New components

I have set up [generate-vue-cli](https://www.npmjs.com/package/generate-vue-cli) with some custom configuration and a custom script, so it handles not only components but also the creation of new pages.

To generate a Vue component based on the template in `utils/templates:`
```bash
npm run generate component ComponentName
```

### Global CSS

Global CSS is located in `scss/global.scss` and loaded in `nuxt.config.ts`. No need for a separate compile step.

### SCSS variables/mixins/functions

Shared SCSS variables, mixins, and functions are located in the `scss` folder and are globally registered in `nuxt.config.ts` -> `vite.css.preprocessorOptions` so they are available to all components without explicit imports.

### Fonts

Fonts from Typekit are loaded in `nuxt.config.ts` -> `app.head.link`. Any other external assets that need to be linked in the `<head>` can be added in the same way.

### Custom directives

Custom directives such as those to use with [vue-tippy](https://www.npmjs.com/package/vue-tippy) are added via Nuxt plugins. This is a 3-step process:
1. Create the plugin in `plugins/` 
2. Register the plugin in `nuxt.config.ts`
3. Add the directive's details to `web-types.json` so WebStorm understands it properly.
   - [About WebTypes](https://plugins.jetbrains.com/docs/intellij/websymbols-web-types.html)
   - [GitHub repo with examples](https://github.com/JetBrains/web-types)

---
## New pages

To generate a new page based on the Markdown template in `utils/templates:`

```bash
npm run generate document DocumentName
```

The script will then prompt for some information to fill in the document frontmatter, and ask whether to create a custom layout template.

**Note to self:** Custom frontmatter fields can be added and then accessed in the relevant Vue template(s) like so:
```vue
<script setup lang="ts">
const { page } = useContent();
const description = page.value.description;
</script>
```

---
## Production builds

To generate a static build of the site, run:

```bash
npm run generate:nuxt
```

The output will be in the `dist/` folder, ready to be deployed to a static hosting service.

---
## Useful links
- [General Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) 
- [Nuxt Content documentation](https://content.nuxt.com/)
- [Deployment documentation](https://nuxt.com/docs/getting-started/deployment)
