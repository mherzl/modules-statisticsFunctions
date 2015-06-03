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
var squares = function(arr){
    return arr.map(function(e){return e*e;});
};
var variance = function(arr){
    var m = mean(arr);
    return sumAll( squares( arr.map(function(e){return e-m;}) ) );
};
module.exports = {
    bar: bar,
    sumAll: sumAll,
    productAll: productAll,
    mean: mean,
    squares: squares,
    variance: variance
};

