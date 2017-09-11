// 先进先出
function Queue() {
    var items = [];

    this.enqueue = function(element) {
        items.push(element);
    }

    this.dequeue = function() {
        return items.shift();
    }

    this.front = function() {
        return items[0];
    }

    this.isEmpty = function() {
        return items.length == 0;
    }

    this.clear = function() {
        items = [];
    }

    this.size = function() {
        return items.length;
    }

    this.print = function() {
        console.log(items);
    }
}


var queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue('hello');
queue.enqueue('friend');

queue.print();

console.log(queue.size());
console.log(queue.isEmpty());

queue.dequeue();
queue.print();