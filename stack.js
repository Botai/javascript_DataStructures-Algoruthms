// 后进先出
function stack() {
    // 选择一种数据结构保存元素
    var items = [];

    this.push = function(element) {
        items.push(element);
    }

    this.pop = function() {
        items.pop();
    }

    // 返回栈顶元素
    this.peek = function() {
        return items[items.length - 1];
    }

    this.isEmpty = function() {
        return items.length == 0;
    }

    this.size = function() {
        return items.length;
    }

    this.clear = function() {
        items = [];
    }

    this.print = function() {
        console.log(items);
    }

}

var stack = new stack();
console.log("是否为空: " + stack.isEmpty());

stack.push(5);
stack.push(8);

console.log("往栈里添加的最后一个元素: " + stack.peek());

stack.push(11);

console.log("栈的元素个数: " + stack.size());
console.log("是否为空: " + stack.isEmpty());

stack.push(15);

console.log(stack.print()); // [ 5, 8, 11, 15 ]

stack.pop();

console.log(stack.print()); // [ 5, 8, 11 ]