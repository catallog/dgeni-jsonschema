var path = require('canonical-path');
var Package = require('dgeni').Package;

module.exports = new Package('dgeni-jsonschema-test', [
  require('../../jsonschema'),
  require('dgeni-packages/nunjucks')
])

.config(function(dgeni, log, debugDumpProcessor) {

  dgeni.stopOnValidationError = true;
  dgeni.stopOnProcessingError = true;

  debugDumpProcessor.$enabled = true;

  log.level = 'warning';
})

.config(function(readFilesProcessor, templateFinder, writeFilesProcessor, computePathsProcessor) {
  readFilesProcessor.basePath = __dirname;
  readFilesProcessor.sourceFiles = [
    {
      include: 'module/*.js',
      basePath: 'module'
    }
  ];

  writeFilesProcessor.outputFolder = 'module';

  computePathsProcessor.pathTemplates.push({
    docTypes: ['js'],
    getPath: function(doc) {
      return path.join(doc.fileInfo.basePath, 'schema-generated');
    },
    getOutputPath: function(doc) {
      return doc.path + '.json';
    },
  });
});
