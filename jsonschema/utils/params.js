function isDocRoot(ref){
  return ref.hasOwnProperty('docType');
}

function getChildren(ref){
  var params = ref.params || [];
  return params.filter(function(p){
    return !p.skipSchema;
  });
}

function stripArrayMarkup(name){
  return name.endsWith('[]') ? name.substring(0, name.length - 2) : name;
}

function getParentName(ref){
  return stripArrayMarkup(ref.name.split('.')[0]);
}

function getName(ref){
  return ref.name.split('.').slice(1).join('.');
}

function hasHierarchy(ref){
  return ref.name.indexOf('.') != -1;
}

function isChild(childParam, testParam){
  return getParentName(childParam) === testParam.name;
}

function moveChildren(ref){
  var params = ref.params || [];

  params.forEach(function(child){

    if(hasHierarchy(child)){
      params.forEach(function(candidate){

        if(isChild(child, candidate)){
          candidate.params || (candidate.params = [])
          var childCopy = Object.assign({}, child, {name: getName(child)});
          child.skipSchema = true;
          candidate.params.push(childCopy);
        }

      });
    }
  });
}

function paramType(param){

  var type = param.typeExpression;
  var ret;

  if(isDocRoot(param))
    ret = 'object';

  if(type !== undefined){
    if(type.endsWith('[]'))
      ret = 'array';
    else
      ret = type;
  }

  console.log('[', ret, ']', param.name);
  return ret;
};

module.exports = {
  isDocRoot: isDocRoot,
  getChildren: getChildren,
  moveChildren: moveChildren,
  paramType: paramType
};
