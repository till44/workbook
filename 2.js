var add = function(a, b) {
    return Number(a) + Number(b);
};

var arr = process.argv.slice(2);
console.log(arr.reduce(add, 0));
