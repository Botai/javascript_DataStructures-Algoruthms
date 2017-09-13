// 链表
function LinkedList() {
    // Node 辅助类，表示要加入列表的项
    // element 属性 要添加到列表的值，next 属性，指向列表中的下一个节点项的指针
    var Node = function(element) {
        this.element = element;
        this.next = null;
    };
    // 存储列表项的数量
    var length = 0;
    // 存储第一个节点的引用，把这个引用存储在 head 变量中
    var head = null;

    // 向链表尾部添加一个新的项
    // 添加元素时，有两种情况：1.列表为空，添加的是第一个元素 2.列表不为空，向其追加元素
    this.append = function(element) {
        var node = new Node(element),
            current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            // 循环列表，直到找到最后一项
            while (current.next) {
                current = current.next;
            }
            // 找到最后一项，将其 next 赋值为 node，建立连接
            current.next = node;
        }
        // 更新列表长度
        length++;
    };
    // 向链表的特定位置插入一个新的项
    this.insert = function(position, element) {
        // 检查越界值
        if (position > -1 && position < length) {

            var node = new Node(element),
                current = head,
                previous,
                index = 0;

            // 在第一个位置添加
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            console.log('在位置' + position + '添加值' + element + '成功！');
        } else {
            return false;
        }
    };
    // 从链表中指定位置移除一项
    this.removeAt = function(position) {
        // 检查越界值
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;

            // 移除第一项
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                // 将 previous 与 current 的下一项连接起来， 跳过 current，从而移除
                previous.next = current.next;
            }
            length--;
            console.log('remove: ' + current.element);
        } else {
            return null;
        }
    };
    // 返回元素在链表中的索引，如果链表中没有该元素返回 -1
    this.indexOf = function(element) {};
    // 链表长度大于 0 返回 false
    this.isEmpty = function() {};
    // 返回链表包含的元素个数
    this.size = function() {
        console.log('length: ' + length);
    };
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

var list = new LinkedList();
list.append(15);
list.append(10);
list.append(13);
list.append(11);
list.append(12);
list.toString();
list.size();
list.removeAt(1);
list.toString();
list.insert(1, 10);
list.toString();