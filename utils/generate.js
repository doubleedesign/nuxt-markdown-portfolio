import { execSync } from 'child_process';
import readline from 'readline';
import { readFileSync, writeFileSync } from 'fs';
import Case from 'case';
import chalk from "chalk";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Custom script for generate-vue-cli commands
 * Usage examples:
 *      npm run generate component SiteLogo will create components/SiteLogo.vue
 *      npm run generate layout FeaturedItem will create layouts/FeaturedItem.vue
 *      npm run generate document About will create content/About.md and ask some questions
 */

const type = process.argv[2];
const name = process.argv[3];

if(type === 'component') {
    execSync(`npx generate-vue-cli component ${name} --flat`, { stdio: 'inherit' });
}
if(type === 'layout') {
    execSync(`npx generate-vue-cli component ${name} --type=layout --flat`, { stdio: 'inherit' });
}
else if(type === 'document') {
    let filePath = `./content/${name}.md`;
    const layer = process.env.npm_config_layer;
    if(layer && (layer !== 'doubleedesign' && layer !== 'leesaward')) {
        console.error(chalk.red('Invalid layer. Valid options are: doubleedesign or leesaward.'));
        process.exit(1);
    }

    // Generate the initial document and then read it back in
    if(layer) {
        execSync(`npx generate-vue-cli component ${name} --type=document-${layer} --flat`, { stdio: 'inherit' });
        filePath = `./layers/${layer}/content/${name}.md`;
    }
    else {
        execSync(`npx generate-vue-cli component ${name} --type=document --flat`, { stdio: 'inherit' });
    }
    let fileContent = readFileSync(filePath, 'utf8');

    // Update the document with some additional information
    fileContent = fileContent
        .replace(`title: ${name}`, 'title: ' + Case.title(name))
        .replace('date: YYYY-MM-DD', 'date: ' + new Date().toISOString().split('T')[0])
        .replace(`# ${name}`, `# ${Case.title(name)}`);

    const customLayout = await confirm('Create custom layout?');
    if(customLayout) {
        const layoutFileName = Case.kebab(name);
        execSync(`npx generate-vue-cli component ${layoutFileName} --type=layout --flat`, { stdio: 'inherit' });
        fileContent = fileContent.replace('layout: default', `layout: ${layoutFileName}`);
    }

    const showInNavigation = await confirm('Show in menu?');
    if(showInNavigation) {
        fileContent = fileContent.replace('navigation: false', `navigation:\n  title: ${Case.title(name)}`);
    }

    try {
        writeFileSync(filePath, fileContent);
        console.log(chalk.green(`${filePath} updated.`));
        process.exit(0);
    }
    catch(error) {
        console.error(chalk.red(`Error writing to ${filePath}`));
        console.error(error);
        process.exit(1);
    }
}
else {
    console.error('Invalid type. Valid options are: component, layout, or document.');
    process.exit(1);
}


/**
 * Function to ask a yes/no question
 * @param question
 */
function confirm(question) {
    return new Promise((resolve) => {
        rl.question(chalk.magenta(`${question} (y/n): \n`), (answer) => {
            resolve(answer.toLowerCase() === 'y');
        });
    });
}