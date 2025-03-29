const generateComponent = require("./.plop/generators/component");
const generateTemplate = require("./.plop/generators/template");
const generateRoute = require("./.plop/generators/route");

module.exports = function (plop) {
  // Generatore di componenti (globale)
  plop.setGenerator("component", generateComponent);

  // Generatore di template (globale)
  plop.setGenerator("template", generateTemplate);

    // Generatore di route (globale)
    plop.setGenerator("route", generateRoute);
};