function hanoi(n, a, b, c) {
    console.log("n1: " + n + ' a: ' + a + ' b: ' + b + ' c: ' + c);
    if (n == 1) {

        console.log("Move " + n + " from " + a + " to " + c);
        console.log("-------------------------------------");
    } else {
        hanoi(n - 1, a, c, b);

        console.log("n2: " + n + ' a: ' + a + ' b: ' + b + ' c: ' + c);

        console.log("Move " + n + " from " + a + " to " + c);

        hanoi(n - 1, b, a, c);

        console.log("n3: " + n + ' a: ' + a + ' b: ' + b + ' c: ' + c);

    }
}
hanoi(3, "A", "B", "C");