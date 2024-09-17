# Nuxt 3 Portfolio Site

## Using Nuxt Layers

I am using [Nuxt Layers](https://nuxt.com/docs/getting-started/layers) to use this repository to manage two separate sites while sharing many common components. 

**More notes to come.**

### Sharing SCSS variables

Variables are set up in each site's `assets/theme.scss` file, which is then shared with the `base` layer using come config in the site layer's `nuxt.config.ts` file. For exmaple:

```typescript
export default defineNuxtConfig({
    extends: [
        './layers/base',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // This makes the theme available to the base components
                    additionalData: '@use "@/layers/doubleedesign/assets/theme.scss" as *;'
                }
            }
        }
    }
}
```
Coincidentally this makes the theme file available without the use of explicit imports.

The same can be done for other files, both in the base layer and site-specific layers. For example, adding the `functions` and `mixins` to the base layer config makes them available to all base layer components.

---
## New components

I have set up [generate-vue-cli](https://www.npmjs.com/package/generate-vue-cli) with some custom configuration and a custom script.

To generate a Vue component based on the template in `utils/templates:`
```bash
npm run generate component ComponentName
```

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
## Links
- [General Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) 
- [Deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
