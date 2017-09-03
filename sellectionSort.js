function sellectionSort(a) {
    var min = 0;
    for (var i = 0; i < a.length; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                min = a[j]
                a[j] = a[i];
                a[i] = min;
            }
        }
    }

}

function test() {
    var a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    sellectionSort(a);
    console.log(a);

    var b = [10.1, 9.1, 8.1, 7.1, 6.1, 5.1, 4.1, 3.1, 2.1, 1.1];
    sellectionSort(b);
    console.log(b);

    var c = ['D', 'C', 'B', 'A'];
    sellectionSort(c);
    console.log(c);

    var d = {
        "student": [{
            "cid": 1,
            "name": "aaa",
            "score": 100
        }, {
            "cid": 2,
            "name": "bbb",
            "score": 150
        }, {
            "cid": 3,
            "name": "ccc",
            "score": 30
        }, {
            "cid": 4,
            "name": "ddd",
            "score": 50
        }, {
            "cid": 5,
            "name": "eee",
            "score": 20
        }]
    }
    console.log(typeof(c));

    function sortJ(a, b) {
        return a.score > b.score;
    };
    var data = d.student.sort(sortJ);

    console.log(data);
    // sellectionSort(d);
    // console.log(d.sort());
}
test();