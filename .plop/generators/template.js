// .plop/generators/template.js

module.exports = {
    description: "Crea un nuovo template",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Inserisci il nome del template (in minuscolo, es. pizzeria): ",
        validate: function (value) {
          if (!/.+/.test(value)) {
            return "Devi inserire un nome per il template";
          }
          return true;
        },
      },
    ],
    actions: [
      // Crea il layout.tsx
      {
        type: "add",
        path: "templates/{{kebabCase name}}-template/app/layout.tsx",
        templateFile: ".plop/templates/template/layout.hbs",
      },
      // Crea la pagina principale page.tsx
      {
        type: "add",
        path: "templates/{{kebabCase name}}-template/app/page.tsx",
        templateFile: ".plop/templates/template/page.hbs",
      },
      // Crea la cartella components vuota
      {
        type: "add",
        path: "templates/{{kebabCase name}}-template/components/index.ts",
        template: "// Componenti verranno generati qui automaticamente",
      },
      // Crea il file di configurazione config.js
      {
        type: "add",
        path: "templates/{{kebabCase name}}-template/config.js",
        templateFile: ".plop/templates/template/config.hbs",
      },
      // Crea il file di descrizione del template
      {
        type: "add",
        path: "templates/{{kebabCase name}}-template/description.md",
        templateFile: ".plop/templates/template/description.hbs",
      },
      // Crea la cartella styles con il file global.css
      {
        type: "add",
        path: "templates/{{kebabCase name}}-template/styles/globals.css",
        templateFile: ".plop/templates/template/globals-css.hbs",
      },
      // Crea la cartella public con la sottocartella images
      {
        type: "add",
        path: "templates/{{kebabCase name}}-template/public/images/placeholder.png",
        templateFile: ".plop/templates/template/placeholder-image.hbs",
      },
      {
        type: "modify",
        path: "tsconfig.json",
        pattern: /"paths":\s*{/,
        template: `"paths": {\n      "@{{kebabCase name}}/*": ["templates/{{kebabCase name}}-template/*"],`
      },
      // Aggiorna l'array validTemplates in config/templates.ts
      {
        type: "modify",
        path: "config/templates.ts",
        pattern: /(\bvalidTemplates\s*=\s*\[)([^\]]*)(\])/,
        template: "$1$2{{#if $2}}, {{/if}}'{{name}}',$3"
      },
      // Crea il componente Header
    {
      type: "add",
      path: "templates/{{kebabCase name}}-template/components/molecules/Header/index.tsx",
      templateFile: ".plop/templates/template/header.hbs",
    },
    {
      type: "add",
      path: "templates/{{kebabCase name}}-template/components/molecules/Header/index.types.ts",
      templateFile: ".plop/templates/component/types.hbs",
    },
    // Crea il componente Footer
    {
      type: "add",
      path: "templates/{{kebabCase name}}-template/components/molecules/Footer/index.tsx",
      templateFile: ".plop/templates/template/footer.hbs",
    },
    {
      type: "add",
      path: "templates/{{kebabCase name}}-template/components/molecules/Footer/index.types.ts",
      templateFile: ".plop/templates/component/types.hbs",
    },
    // Crea il componente Hero
    {
      type: "add",
      path: "templates/{{kebabCase name}}-template/components/molecules/Hero/index.tsx",
      templateFile: ".plop/templates/template/hero.hbs",
    },
    {
      type: "add",
      path: "templates/{{kebabCase name}}-template/components/molecules/Hero/index.types.ts",
      templateFile: ".plop/templates/component/types.hbs",
    },
    ],
  };