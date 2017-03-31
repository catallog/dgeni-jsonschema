var jsondiffpatch = require('jsondiffpatch');

module.exports = function(util, customEqualityTesters) {
  return {
    compare: function(actual, expected) {
      var result = {};
      actual = JSON.parse(JSON.stringify(actual));
      expected = JSON.parse(JSON.stringify(expected));
      result.pass = util.equals(actual, expected, customEqualityTesters);
      result.name = 'JSON objects ' + (result.pass ? '' :  'don\'t') + ' match';
      if (!result.pass) {
        var delta = jsondiffpatch.diff(expected, actual);
        result.message = '' + jsondiffpatch.console.log(delta);
      }
      return result;
    },
  };
}

