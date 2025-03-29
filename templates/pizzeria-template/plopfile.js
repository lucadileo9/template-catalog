// templates/pizzeria-template/plopfile.js

const generateComponent = require("../../.plop/generators/component");

module.exports = function (plop) {
  // Generatore di componenti per il template Pizzeria
  plop.setGenerator("component", {
    ...generateComponent, // Usa il generatore condiviso
    actions: generateComponent.actions.map((action) => {
      if (action.type === "add") {
        // Modifica il percorso per puntare alla cartella del template corrente
        action.path = action.path.replace(
          "./app/components", // Percorso originale (globale)
          "./components"     // Percorso locale del template
        );
      }
      return action;
    }),
  });
};