var jsonComparison = require('./json-comparison');

module.exports = function(){
  jasmine.addMatchers({
    toEqualJSON: jsonComparison
  });
};
