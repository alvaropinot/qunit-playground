QUnit.test('should say hello', function (assert) {
  assert.equal(sayHello(), 'hello world');
});

QUnit.test('should change this test', function (assert) {
  var spyFunction = sinon.spy();
  spyFunction();
  assert.ok(spyFunction.called);
});

QUnit.test('should also change this test', function(assert) {
  assert.ok(false);
});
