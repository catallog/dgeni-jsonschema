module.exports = function(param) {

  var ret = {
    description: param.description,
    type: param.typeExpression
  }

  if(param.defaultValue)
    ret.default = param.defaultValue;

  return ret;
}
