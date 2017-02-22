var extensions = require('../../lib/extensions');

describe('Multiple jsonschema in same module:', function(){


  beforeEach(extensions);

  describe('First generated schema', function(){

    it('Test first generated schema', function(){
      var reference = require('./Component01-reference');
      var generated = require('./Component01-generated');
      expect(generated).toEqualJSON(reference);
    });

  });

  describe('Second generate schema', function(){

    it('Should be equal', function(){
      var reference = require('./Component02-reference');
      var generated = require('./Component02-generated');
      expect(generated).toEqualJSON(reference);
    });

  });

});

