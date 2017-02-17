module.exports = function formatJsonschema() {
  return {

    $runAfter: ['extra-docs-added'],
    $runBefore: ['computing-ids'],

    $process: function(docs) {

      docs.forEach(function(doc){

        var properties = {};
        var required = [];

        if (doc.hasOwnProperty('params')){
          doc.params.forEach(function(param){
            var name = param.name;

            if (!param.optional){
              required.push(name);
            }

            properties[name] = {
              type: param.typeExpression,
              description: param.description
            };

            if (param.hasOwnProperty('defaultValue')){
              properties[name].default = param.defaultValue;
            }
          });
        }

        doc.schema = {
          type: 'object',
          title: doc.name,
          description: doc.description,
          properties: properties,
          required: required.sort()
        }
      })
    }
  };
};
