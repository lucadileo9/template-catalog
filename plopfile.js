const generateComponent = require("./.plop/generators/component");
const generateTemplate = require("./.plop/generators/template");

module.exports = function (plop) {
  // Generatore di componenti (globale)
  plop.setGenerator("component", generateComponent);

  // Generatore di template (globale)
  plop.setGenerator("template", generateTemplate);
};