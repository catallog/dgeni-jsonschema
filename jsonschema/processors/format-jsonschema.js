module.exports = function formatJsonschema(jsonschemaParamFormater) {
  return {

    $runAfter: ['extra-docs-added'],
    $runBefore: ['computing-ids'],

    $process: function(docs) {

      docs.forEach(function(doc){

        var schema = {};
        if (doc.hasOwnProperty('params'))
          schema = doc.params.reduce(jsonschemaParamFormater.format, {})

        var defaultSchema = {
          type: 'object',
          title: doc.name,
          description: doc.description
        };
        doc.schema = Object.assign({}, defaultSchema, schema);
      })
    }
  };
};
