var lib = require('./lib.js');

var list = [1,2,3];

var s = lib.sumAll(list);
var p = lib.productAll(list);
var m = lib.mean(list);
var v = lib.variance(list);

console.log(s);
console.log(p);
console.log(m);
console.log(v);

