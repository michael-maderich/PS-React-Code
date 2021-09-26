var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var mything = ["stuff", "things"].reduce(function (acc, item) {
    var obj = __assign({}, acc);
    obj[item] = item;
    return obj;
}, {});
console.log(mything);
