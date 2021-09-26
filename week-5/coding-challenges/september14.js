function changeEnough(q, d, n, p, t) {
    return q * 25 + d * 10 + n * 5 + p >= t * 100;
}
console.log(changeEnough(25, 20, 5, 0, 4.25));
console.log(changeEnough(4, 3, 0, 0, 1.30));
console.log(changeEnough(0, 0, 0, 0, 0.99));
function add_suffix(suffix) {
    return function (prefix) { return prefix + suffix; };
}
var add_ly = add_suffix("ly");
console.log(add_ly('hopeless'));
var add_less = add_suffix("less");
console.log(add_less('hope'));
console.log(add_ly(add_less('hope')));
function concat_arrays() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    // const first = arr.shift();
    // if (!first) return;
    // return first.concat(concat_arrays(arr));
    var cArr = [];
    for (var i = 0; i < arr.length; i++)
        cArr = cArr.concat(arr[i]);
    return cArr;
}
console.log(concat_arrays([1, 2, 3], [4, 5], [6, 7]));
console.log(concat_arrays([1], [2], [3], [4], [5], [6], [7]));
console.log(concat_arrays([1, 2], [3, 4]));
console.log(concat_arrays([4, 4, 4, 4, 4]));
function paperThickness(n) {
    return 0.5 * Math.pow(2, n);
}
console.log(paperThickness(1));
console.log(paperThickness(4));
console.log(paperThickness(21));
function sevenBoom(input) {
    var seven = false;
    for (var i = 0; i < input.length; i++) {
        if (input[i].toString().indexOf('7') !== -1)
            return "Boom!";
    }
    return "there is no 7 in the array";
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
// 7 contains the number seven.
console.log(sevenBoom([8, 6, 33, 100]));
// None of the items contain 7 within them.
console.log(sevenBoom([2, 55, 60, 97, 86]));
// 97 contains the number seven.
function objectToArray(o) {
    var res = Object.keys(o).reduce(function (result, obj) {
        result.push([obj, o[obj]]);
        return result;
    }, [,]);
    res.shift();
    return res;
}
console.log(objectToArray({ a: 1, b: 2 }));
console.log(objectToArray({ shrimp: 15, tots: 12 }));
console.log(objectToArray({}));
function countTrue(arr) {
    return arr.filter(function (b, i) { return b; }).length;
}
console.log(countTrue([true, false, false, true, false])); // ➞ 2
console.log(countTrue([false, false, false, false])); // ➞ 0
console.log(countTrue([])); // ➞ 0
