var baseFormater = require('./base');
var paramsUtils = require('../utils/params');

function buildObject(ref){
  var base = baseFormater(ref);
  paramsUtils.moveChildren(ref);

  base.data.type = paramsUtils.paramType(ref);
  if(paramsUtils.isDocRoot(ref)){
    base.data.title = ref.name;
  }

  base.children = paramsUtils.getChildren(ref);

  return base;
};

module.exports = buildObject;
