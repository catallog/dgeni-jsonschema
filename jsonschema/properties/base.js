module.exports = function(param) {
  function extractData(){
    var ret = {
      description: param.description,
      type: param.typeExpression
    }
    if(param.defaultValue) {
      ret.default = param.defaultValue;
    }
    return ret;
  };

  return {
    data: extractData(),
    children: []
  };
};
