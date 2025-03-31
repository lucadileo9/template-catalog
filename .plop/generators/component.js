const path = require("path");

module.exports = {
  description: "Logica di creazione di un componente secondo Atomic Design",
  prompts: [
    {
      type: "input",
      name: "templateName",
      message: "Inserisci il nome del template in cui vuoi creare il componente (in minuscolo, es. pizzeria): ",
      validate: function (value) {
        if (!/.+/.test(value)) {
          return "Devi inserire un nome per il template";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "name",
      message: "Inserisci il nome del componente (in PascalCase, es. UserCard): ",
      validate: function (value) {
        if (!/.+/.test(value)) {
          return "Devi inserire un nome per il componente";
        } else if (value.length < 3) {
          return `"${value}" non è abbastanza descrittivo`;
        }
        return true;
      },
    },
    {
      type: "list",
      name: "level",
      message: "Scegli il livello Atomic Design del componente: ",
      choices: () => [
        {
          name: "Atomo",
          value: "atoms",
        },
        {
          name: "Molecola",
          value: "molecules",
        },
        {
          name: "Organismo",
          value: "organisms",
        },
      ],
    },
  ],
  actions: [
    // Crea il file index.tsx del componente
    {
      type: "add",
      path: "templates/{{kebabCase templateName}}-template/components/{{level}}/{{pascalCase name}}/index.tsx",
      templateFile: path.resolve(__dirname, "../templates/component/component.hbs"),
    },
    // Crea il file index.types.ts del componente
    {
      type: "add",
      path: "templates/{{kebabCase templateName}}-template/components/{{level}}/{{pascalCase name}}/index.types.ts",
      templateFile: path.resolve(__dirname, "../templates/component/types.hbs"),
    },
  ],
};