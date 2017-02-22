var extensions = require('../../lib/extensions');

describe('Basic jsonschema generation:', function(){

  beforeEach(extensions);

  it('Should generate schema equal to reference', function(){
    var reference = require('./schema-reference');
    var generated = require('./schema-generated');
    expect(generated).toEqualJSON(reference);
  });
});

