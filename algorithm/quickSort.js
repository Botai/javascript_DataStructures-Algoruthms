function quick(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var left = [];
    var right = [];
    var base = arr[0];
    for (var i = 1; i < arr.length; i++) {
        // 判决条件
        if (arr[i] > base) {
            right.push(arr[i]);
            console.log("right: " + right);
        } else {
            left.push(arr[i]);
            console.log("left: " + left);
        }
    }
    console.log("--------------------------------")

    return quick(left).concat(base, quick(right));
}

var a = [29, 18, 25, 47, 58, 12, 51, 10];

console.log(quick(a));