function quick_sort(arr, i, j) {

    //如果数组长度小于1，不用排序
    if ((j - i) <= 1) {
        return arr;
    }
    var left = i;
    var right = j;
    var base = left;
    var center = arr[left];

    while (left < right) {
        console.log(arr)
            //从右向左扫描是否存在比基数小的数字
        while (left < right && arr[right] >= center) {
            right--;
        }
        if (left < right) {
            //将小于基数的数字放置到左侧
            arr[left] = arr[right];
            left++;
        }
        //从左向右扫描是否存在比基数大的数字
        while (left < right && arr[left] < center) {
            left++;
        }
        if (left < right) {
            //将大于基数的数字放置到右侧
            arr[right] = arr[left];
            right--;
        }
    }

    //更新基数
    base = left;
    arr[base] = center;
    quick_sort(arr, i, base - 1); //递归对左侧进行排序
    quick_sort(arr, (base + 1), j); //递归对右侧进行排序
    return arr;
}

function quick_sort2(arr) {
    return quick_sort(arr, 0, arr.length - 1); //进行排序
}

var a = [29, 18, 25, 47, 58, 12, 51, 10];
// var b = [52, 49, 80, 36, 14, 58, 61, 97, 23, 75];
console.log(quick_sort2(a));