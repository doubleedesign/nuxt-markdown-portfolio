# Nuxt 3 Minimal Starter + my stuff

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

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
