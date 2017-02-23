module.exports = function formatJsonschema(propertyGateway) {

  return {

    $runAfter: ['extra-docs-added'],

    $runBefore: ['computing-ids'],

    $process: function(docs) {
      docs.forEach(function(doc){
        try {
          doc.schema = propertyGateway(doc);
        } catch(err){
          console.log(err);
        }
      })
    }
  };
};
