var sumAll = function(arr){
    return arr.reduce(function(a,e){return a + e;},0);
};
var productAll = function(arr){
    return arr.reduce(function(a,e){return a*e;},1);
};
var mean = function(arr){
    return sumAll(arr) / arr.length;
};
//squares is not exported by this module
var squares = function(arr){
    return arr.map(function(e){return e*e;});
};
var variance = function(arr){
    var m = mean(arr);
    return sumAll( squares( arr.map(function(e){return e-m;}) ) );
};
module.exports = {
    sumAll: sumAll,
    productAll: productAll,
    mean: mean,
    variance: variance
};

