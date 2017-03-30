var baseFormater = require('./base');
var paramsUtils = require('../utils/params');

function proccess(ref){
  var base = baseFormater.proccess(ref);
  paramsUtils.moveChildren(ref);

  base.data.type = paramsUtils.paramType(ref);
  if(paramsUtils.isDocRoot(ref)){
    base.data.title = ref.name;
  }

  base.children = paramsUtils.getChildren(ref);

  return base;
};

module.exports = {
  proccess: proccess
};
