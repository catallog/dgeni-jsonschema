var path = require('canonical-path');

module.exports = function(templateFinder){
  templateFinder.templateFolders.unshift(path.resolve(__dirname, 'templates'));
  templateFinder.templatePatterns.unshift('jsonschema.template.json');
}
