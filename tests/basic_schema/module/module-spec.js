describe('Basic jsonschema generation:', function(){
  it('Should generate schema equal to reference', function(){
    var reference = require('./schema-reference');
    var generated = require('./schema-generated');
    expect(generated).toEqual(reference);
  });
});

