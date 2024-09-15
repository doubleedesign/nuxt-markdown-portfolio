# Nuxt 3 Portfolio Site

## Getting started

```bash
npm install
```

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

See [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) for more general information.

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
## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
