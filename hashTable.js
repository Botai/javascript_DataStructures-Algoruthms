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
}

function HashTable() {
    var table = [];

    var loseloseHashCode = function(key) {
        var hash = 0;
        // 根据组成 key 的每个字符的 ASCII码值得和得到一个数字，存储到 hash 中
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        // 为了得到比较小的数值
        return hash % 37;
    }

    this.put = function(key, value) {
        var position = loseloseHashCode(key);
        console.log(position + "-" + key);
        table[position] = value;
    };

    this.get = function(key) {
        return table[loseloseHashCode(key)];
    }

    this.remove = function(key) {
        table[loseloseHashCode(key)] = undefined;
    }

    this.print = function() {
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i]);
            }
        }
    }

    // 处理冲突问题
    // 方法一：分离链接
    // 分离链接法包括为散列表的每一个位置创建一个链表并将存储在里面，它在 HashTable 实例之外还需要额外的存储空间
    var ValuePair = function(key, value) {
            this.key = key;
            this.value = value;

            this.toString = function() {
                return '[' + this.key + '-' + this.value + ']';
            }
        }
        // 重写 put get remove 方法
    this.put = function(key, value) {
        var position = loseloseHashCode(key);

        if (table[position] == undefined) {
            table[position] == new LinkedList();
        }
        table[postion].append(new ValuePair(key, value));
    }

    this.get = function(key) {
        var position = loseloseHashCode(key);

        if (table[position] !== undefined) {
            var current = table[postion].getHead();
        }
    }

}

var hash = new HashTable();
hash.put("person_1", "1111111");
// hash.put("person_2", "222");
// hash.put("person_3", "333");

console.log(hash.get("person_1"));
console.log(hash.get("person"));

hash.remove("person_1");
console.log("person_1 是否存在：")
console.log(hash.get("person_1"));

console.log("---------------------------------");

// 处理散列表中改的冲突
hash.put("Tyrion", "1");
hash.put("Aaron", "2");

hash.put("Donnie", "1");
hash.put("Ana", "2");

hash.print();