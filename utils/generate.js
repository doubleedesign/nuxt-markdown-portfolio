import { execSync } from 'child_process';

/**
 * Custom script for generate-vue-cli commands
 * Usage examples:
 *      npm run generate component SiteLogo will create components/SiteLogo.vue
 *      npm run generate document About will create content/About.md
 */

const type = process.argv[2];
const name = process.argv[3];

if(type === 'component') {
    execSync(`npx generate-vue-cli component ${name} --flat`, { stdio: 'inherit' });
}
else {
    execSync(`npx generate-vue-cli component ${name} --type=document --flat`, { stdio: 'inherit' });
}
