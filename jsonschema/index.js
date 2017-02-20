var path = require('canonical-path');
var Package = require('dgeni').Package;
var config = require('./config');

module.exports = new Package('jsonschema', [
  require('dgeni-packages/jsdoc')
])

.factory(require('./services/param-formater'))

.processor(require('./processors/format-jsonschema'))

.config(config);

