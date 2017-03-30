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

function postProccess(ref){
  if(ref.type == 'array' && ref.properties){
    ref.items = Object.assign({}, {
      required: ref.required,
      properties: ref.properties,
      type: 'object'
    });

    delete ref.properties;
    delete ref.required;
  }
  return ref;
}

module.exports = {
  proccess: proccess,
  postProccess: postProccess
};
