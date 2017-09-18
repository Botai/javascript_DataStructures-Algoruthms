function doubleLinkedList() {

    var Node = function(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };

    var length = 0;
    var head = null;
    var tail = null;

    this.append = function(element) {
        var node = new Node(element),
            current = head,
            previous;

        if (head === null) {
            head = node;
            tail = node;
        } else {
            current = head;
            // 循环列表，直到找到最后一项
            while (current.next) {
                current = current.next;
            }
            // 找到最后一项，将其 next 赋值为 node，建立连接
            current.next = node;
            node.prev = current
        }
        // 更新列表长度
        length++;
    };

    this.insert = function(position, element) {
        // 检查越界值

        if (position > -1 && position <= length) {

            var node = new Node(element),
                current = head,
                previous,
                index = 0;

            if (position === 0) {
                // 在第一个位置添加
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {
                // 在最后一项插入
                // current = tail;
                tail.next = node;
                node.prev = tail;
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev = previous;
            }
            length++;
            console.log('在位置 ' + position + ' 添加值 ' + element + ' 成功！');
        } else {
            console.log('insert err!!!')
            return false;
        }
    }
    this.removeAt = function(position) {
            // 检查越界值
            if (position > -1 && position < length) {
                var current = head,
                    previous,
                    index = 0;

                // 移除第一项
                if (position === 0) {
                    head = current.next;
                    if (length === 1) {
                        tail = null;
                    } else {
                        head.prev = null;
                    }
                } else if (position === length - 1) {
                    current = tail;
                    tail = current.prev;
                    tail.next = null;
                } else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    }
                    // 将 previous 与 current 的下一项连接起来， 跳过 current，从而移除
                    previous.next = current.next;
                    current.next.prev = previous;
                }
                length--;
                console.log('在位置 ' + position + ' 删除 ' + current.element + ' 成功！');
            } else {
                console.log('remove err!!!!!')
                return null;
            }
        }
        // 重写 toString() 方法
    this.toString = function() {
        var current = head,
            string = '';
        while (current) {
            string += current.element;
            string += ' ';
            current = current.next;
        }
        console.log(string);
    };



}

var doubleList = new doubleLinkedList();
doubleList.append(999);
doubleList.append(888);
doubleList.append(777);

// doubleList.insert(0, 2);
// doubleList.insert(0, 1);
// doubleList.insert(0, 4);
// doubleList.insert(3, 33);
// doubleList.removeAt(3);

doubleList.toString();