function refreshHeap(array, n) {
    console.log(array)
    if (array.length < n) n = array.length;

    //array[n/2-1]表示的是最后一个有子节点的节点  
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        //对于有子节点的节点i，2*i+1表示的是其第一个子节点，即左子节点  
        //这个while是判断当前节点与其子节点是否需要调整  
        while (2 * i + 1 < n) {
            let j = 2 * i + 1;
            //如果节点j不是其父节点的唯一子节点，也就是说如果存在右子节点  
            if (j + 1 < n) {
                //如果右子节点大于左子节点，则使j指向右边（总之要找到最大的子接点）  
                if (array[j] < a[j + 1]) {
                    j++;
                }
            }
            //如果最大子节点大于其父节点，则交换  
            if (a[i] < a[j]) {
                let tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
                //交换之后整个堆被破坏，需要重新调整，故令i=j  
                //这个调整表示的是从j节点开始判断堆是否需要调整  
                //比如交换j、i节点后，结果j的子节点又大于j了，那么就需要重新调整  
                i = j;
            } else {
                break;
            }
        }
    }
    return array;
}

function HeapSort(array, n) {
    if (array.length < n) n = array.length;
    while (n > 0) {
        //刷新堆之后，将array[0]（最大值）与最后一个子节点交换  
        //然后重新刷新堆(不包括最后那些排好序的节点了)  
        refreshHeap(array, n--);
        let tmp = array[n];
        array[n] = array[0];
        array[0] = tmp;
    }

    return array;
}

var a = [29, 18, 25, 47, 58, 12, 51, 10];
HeapSort(a, a.length);
console.log(a);