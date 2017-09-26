function merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {

        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    console.log("结果： " + result.concat(left).concat(right))
        /* 当左右数组长度不等.将比较完后剩下的数组项链接起来即可 */
    return result.concat(left).concat(right);
}

function mergeSort(arr) {
    if (arr.length == 1) { return arr };
    var mid = Math.floor(arr.length / 2);
    var left_arr = arr.slice(0, mid),
        right_arr = arr.slice(mid);
    return merge(mergeSort(left_arr), mergeSort(right_arr));
}

var arr = [29, 18, 25, 47, 58, 12, 51, 10];

console.log(mergeSort(arr));