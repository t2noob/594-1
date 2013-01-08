var assert = require('assert');

(function() {
  "use strict";
  try { a = 3; } catch (e) { }
  assert(typeof a === 'undefined');
}());

(function() {
  try { a = 3; } catch (e) { }
  assert(a === 3);
}());

console.log('All tests passed.');

