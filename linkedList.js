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
    this.append = function(element) {
        var node = new Node(element),
            current;
    };
    // 向链表的特定位置插入一个新的项
    this.insert = function(position, element) {};
    // 从链表中移除一项
    this.removeAt = function(position) {};
    // 返回元素在链表中的索引，如果链表中没有该元素返回 -1
    this.indexOf = function(element) {};
    // 链表长度大于 0 返回 false
    this.isEmpty = function() {};
    // 返回链表包含的元素个数
    this.size = function() {};
    // 重写 toString() 方法
    this.toString = function() {};
    this.print = function() {};


}