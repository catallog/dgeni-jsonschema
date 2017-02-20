var props = require('../properties');

module.exports = function jsonschemaParamFormater(){
  return {
    format: function(schema, param){
      if(param.hasOwnProperty('typeExpression')){
        var prop = props[param.typeExpression];
        if(prop){
          schema.properties || (schema.properties = {});
          schema.properties[param.name] = prop(param);

          if(!param.optional){
            schema.required || (schema.required = []);
            schema.required.push(param.name);
            schema.required.sort();
          }

        } else {
          console.log("No property formater avaiable for type: ", param.typeExpression);
        }
      } else {
        console.log("this param has no typeExpression");
      }
      return schema;
    }
  }
};
