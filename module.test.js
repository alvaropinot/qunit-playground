QUnit.test('should say hello', function(assert) {
  assert.equal(sayHello(), 'hello world');
});

QUnit.test('should change this test', function(assert) {
  assert.ok(false);
});
