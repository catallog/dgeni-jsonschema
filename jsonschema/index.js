var path = require('canonical-path');
var Package = require('dgeni').Package;
var config = require('./config');

module.exports = new Package('jsonschema', [
  require('dgeni-packages/jsdoc')
])

.processor(require('./processors/formatJsonschema'))

.config(config);

