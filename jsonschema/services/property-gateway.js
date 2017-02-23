var properties = require('../properties');
var paramsUtils = require('../utils/params');


function extractRequired(root, next){
  if (!next.optional){
    root.required || (root.required = []);
    root.required.push(next.name);
    root.required.sort();
  }
}

function fn(param) {

  var type = paramsUtils.paramType(param);

  if(type) {
    var PropertyFormater = properties[type];

    if(PropertyFormater) {
      var formated = PropertyFormater(param);
      var root = formated.data;

      if (formated.children.length){
        root.properties = formated.children.reduce(function(base, next){
          base[next.name] = fn(next);
          extractRequired(root, next);
          return base;
        }, {});
      }
      return root;
    } else {
      console.log("No property formater avaiable for type: ", type);
    }
  } else {
    console.log("this param has no typeExpression", param.name);
  }
  return {};
};

module.exports = function propertyGateway(){
  return fn;
};
