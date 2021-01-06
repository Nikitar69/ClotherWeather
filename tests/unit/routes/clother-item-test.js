import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | clother-item', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:clother-item');
    assert.ok(route);
  });
});
