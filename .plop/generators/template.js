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
      // Crea il plopfile.js per il template
      {
        type: "add",
        path: "templates/{{kebabCase name}}-template/plopfile.js",
        templateFile: ".plop/templates/template/plopfile.hbs",
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
        path: "templates/{{kebabCase name}}-template/styles/global.css",
        templateFile: ".plop/templates/template/global-css.hbs",
      },
      // Crea la cartella public con la sottocartella images
      {
        type: "add",
        path: "templates/{{kebabCase name}}-template/public/images/placeholder.png",
        templateFile: ".plop/templates/template/placeholder-image.hbs",
      },
    ],
  };