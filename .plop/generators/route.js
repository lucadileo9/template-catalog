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
    ],
    actions: [
      // Crea il file page.tsx per la nuova route
      {
        type: "add",
        path: "templates/{{kebabCase templateName}}-template/app/{{kebabCase routeName}}/page.tsx",
        templateFile: ".plop/templates/route/page.hbs",
      },
    ],
  };