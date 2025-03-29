const path = require("path");

module.exports = {
    description: "Atomic Design component creation logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Insert component name (in PascalCase, ex. UserCard): ",
        validate: function (value) {
          let message = true
          if (!/.+/.test(value)) {
            message = console.error("Missing", "you must define a component name")
          } else if (value.length < 3) {
            message = console.error(
              "Too Short",
              `"${value}" is not descriptive enough`
            )
          }
          return message
        },
      },
      {
        type: "list",
        name: "level",
        message: "Choose Atomic Design level of the component: ",
        choices: () => [
          {
            name: "Atom",
            value: "atoms",
          },
          {
            name: "Molecule",
            value: "molecules",
          },
          {
            name: "Organism",
            value: "organisms",
          },
        ],
      },
    ],
    actions: [
      {
        type: "add",
        path: "./app/components/{{level}}/{{pascalCase name}}/index.tsx",
        templateFile: path.resolve(__dirname, "../templates/component/component.hbs"),
      },
      {
        type: "add",
        path: "./app/components/{{level}}/{{pascalCase name}}/index.types.ts",
        templateFile: path.resolve(__dirname, "../templates/component/types.hbs"),
      },
    ],
  }
  