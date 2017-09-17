function doubleLinkedList() {

    var Node = function(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };

    var length = 0;
    var head = null;
    var tail = null;

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
                current = tail;
                current.next = node;
                node.prev = current;
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
            console.log('在位置' + position + '添加值' + element + '成功！');
        } else {
            console.log('err!!!')
            return false;
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
doubleList.insert(0, 2);
doubleList.insert(0, 1);
doubleList.insert(0, 4);
doubleList.insert(3, 33);
doubleList.insert(2, 22);

doubleList.toString();