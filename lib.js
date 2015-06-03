
var bar = 'Hello!!';
var x = bar;

var sumAll = function(arr){
    return arr.reduce(function(a,e){return a + e;},0);
};

var productAll = function(arr){
    return arr.reduce(function(a,e){return a*e;},1);
};

var mean = function(arr){
    return sumAll(arr) / arr.length;
};

module.exports = {
    bar: bar,
    sumAll: sumAll,
    productAll: productAll,
    mean: mean
};

