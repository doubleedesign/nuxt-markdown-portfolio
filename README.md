# Nuxt 3 Portfolio Sites

## Table of contents
- [Using Nuxt Layers](#using-nuxt-layers)
- [New components](#new-components)
- [New pages](#new-pages)
- [Generating production builds](#generating-production-builds)

---
## Using Nuxt Layers

I am using [Nuxt Layers](https://nuxt.com/docs/getting-started/layers) to use this repository to manage two separate sites while sharing many common components.

- Shared components are located in `/layers/base/components`.
- Site-specific components are located in their respective layer folders, e.g. `/layers/doubleedesign/components`.
- Content for each site is also located in its respective layer folder, e.g. `/layers/doubleedesign/content`.
- Shared content is in the default `/content` folder.

I have set up custom commands to run each site in dev mode on different ports:
    
```bash
npm run dev:doublee
npm run dev:leesa
```

### Theming

The `run dev` commands include setting the `NUXT_CURRENT_LAYER` environment variable, which is used by the base layer's config to access the current layer's SCSS variables (`theme.scss` file) like so:

<details>
<summary>/layers/base/nuxt.config.ts (click to expand)</summary>

```typescript
// layers/base/nuxt.config.ts
const currentLayer = process.env.NUXT_CURRENT_LAYER;
export default defineNuxtConfig({
	// ... 
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
                        @use "@/layers/${currentLayer}/assets/theme.scss" as *;
                    `
				}
			}
		}
	},
});
```
</details>

Coincidentally, the `vite.css.preprocessorOptions.scss.additionalData` field also makes the files listed in it available to components without explicit imports. So to use the base layer's functions and mixins in the other layers, for example, I do this:

<details>
<summary>/layers/doubleedesign/nuxt.config.ts (click to expand)</summary>

```typescript
// layers/doubleedesign/nuxt.config.ts
export default defineNuxtConfig({
	extends: ['../base/nuxt.config.ts'],
    // ... 
	vite: {
        // ... 
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
                        @use "@/layers/base/assets/functions.scss" as *;
                        @use "@/layers/base/assets/mixins.scss" as *;
                        @use "@/layers/doubleedesign/assets/theme.scss" as *;
                    `
				}
			}
		}
	},
});
```
</details>

### Content

Pages that should be used on both sites are located in the `/content` folder. 

Pages that are specific to a site are located in the respective layer's `/content` folder. The use of this custom folder is configured in `sources` in the project root's `nuxt.config.ts` file, using the `NUXT_CURRENT_LAYER` environment variable to determine which layer's content to use.

**Important:** Avoid having pages with the same filenames in both a layer and the shared folder. The layer's content will take precedence, but the shared one will also be picked up and displayed in menus that use Nuxt's navigation functionality.

That said, it's fine to have the same filenames in the `doubleedesign` and `leesaward` content layers, because only one of these layers is in use at a time.

---
## New components

I have set up [generate-vue-cli](https://www.npmjs.com/package/generate-vue-cli) with some custom configuration and a custom script, so it handles not only components but also the creation of new pages (accounting for the two site layers for those as well).

To generate a Vue component based on the template in `utils/templates:`
```bash
npm run generate component ComponentName
```

## New pages

To generate a new page based on the Markdown template in `utils/templates:`

For a shared page:
```bash
npm run generate document DocumentName
```

For a site-specific page:
```bash
npm run generate document DocumentName --layer=doubleedesign
npm run generate document DocumentName --layer=leesaward
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
## Generating production builds

I have set up custom commands to generate static builds for each site.

```bash
npm run build:static:doublee
npm run build:static:leesa
```

---
## Links
- [General Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) 
- [Nuxt Content documentation](https://content.nuxt.com/)
- [Deployment documentation](https://nuxt.com/docs/getting-started/deployment)
