// .plop/generators/route.js

module.exports = {
    description: "Crea una nuova route in un template",
    prompts: [
      {
        type: "input",
        name: "templateName",
        message: "Inserisci il nome del template (in minuscolo, es. pizzeria): ",
        validate: function (value) {
          if (!/.+/.test(value)) {
            return "Devi inserire un nome per il template";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "routeName",
        message: "Inserisci il nome della route (es. menu): ",
        validate: function (value) {
          if (!/.+/.test(value)) {
            return "Devi inserire un nome per la route";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "label",
        message: "Inserisci l'etichetta visibile per la route (es. Menu): ",
        validate: function (value) {
          if (!/.+/.test(value)) {
            return "Devi inserire un'etichetta per la route";
          }
          return true;
        },
      },
    ],

    actions: [
      // Crea il file page.tsx per la nuova route
      {
        type: "add",
        path: "templates/{{kebabCase templateName}}-template/app/{{kebabCase routeName}}/page.tsx",
        templateFile: ".plop/templates/route/page.hbs",
      },
      // Aggiorna il file config.js
      {
        type: "modify",
        path: "templates/{{kebabCase templateName}}-template/config.js",
        pattern: /(menuItems\s*:\s*\[)([\s\S]*?)(\])/,
        template: `$1$2\n      { label: '{{properCase label}}', link: '{{kebabCase templateName}}/{{kebabCase routeName}}' },$3`,
      },
    ],
  };