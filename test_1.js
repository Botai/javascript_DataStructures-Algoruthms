var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}


console.log(numbers.sort(compare))