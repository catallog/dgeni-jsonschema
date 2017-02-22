var extensions = require('../../lib/extensions');

describe('Object as parameter: ', function(){

  beforeEach(extensions);

  it('Should generate schema equal to reference', function(){
    var reference = require('./schema-reference');
    var generated = require('./schema-generated');
    // expect(generated).toEqual(reference);
    expect(generated).toEqualJSON(reference);
  });
});

