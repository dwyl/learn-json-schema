var test = require('tape');
var Ajv = require('ajv');
var ajv = new Ajv({allErrors: true} );

test('confirm Georgina Washington is a valid person', t => {
  var schema = require('../schema/person.json');
  // console.log(schema);
  var data = require('./fixtures/person.json');
  var valid = ajv.validate(schema, data);
  if (!valid) {
    console.log(ajv.errors);
  }
  t.ok(valid, 'Georgina is a valid person');
  t.end();
});
