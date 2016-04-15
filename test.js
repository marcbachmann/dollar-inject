var assert = require('assert')
var $inject = require('./')

function method () {}
$inject('a', 'b', method)
assert.equal(typeof method, 'function')
assert.equal(method.$inject.length, 2)
assert.equal(method.$inject[0], 'a')
assert.equal(method.$inject[1], 'b')
