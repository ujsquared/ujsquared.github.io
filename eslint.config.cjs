const eslintPluginAstro = require('eslint-plugin-astro');

module.exports = [
  eslintPluginAstro.configs.recommended,
  {
    ignores: ['public/scripts/*', 'scripts/*', '.astro/', 'src/env.d.ts']
  }
];

