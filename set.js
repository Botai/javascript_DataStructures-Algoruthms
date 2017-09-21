// 一组无序且唯一的项 集合
function Set() {
    var items = {};

    this.has = function(value) {
        // return value in items;
        return items.hasOwnProperty(value)
    }

    this.add = function(value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return true;
    }

    this.remove = function(value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    }

    this.clear = function() {
        items = {};
    }

    this.size = function() {
        return Object.keys(items).length;
    }

    this.values = function() {
        // 方法返回一个数组
        return Object.keys(items);
    }

    // 并集
    this.union = function(otherSet) {
        var unionSet = new Set();
        var values = this.values();

        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();

        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        return unionSet;
    }

    // 交集
    this.intersection = function(otherSet) {
        var intersectionSet = new Set();
        var values = this.values();

        for (var i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }

    // 差集
    this.difference = function(otherSet) {
        var differenceSet = new Set();
        var values = this.values();

        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }

        }
        return differenceSet;
    }

    // 子集
    this.subset = function(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            var values = this.values();
            for (var i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    }

}

var set = new Set();
set.add(1);
set.add(2);

console.log(set.values());
console.log(set.has(1));
console.log(set.size());

set.remove(1);
console.log(set.values());

// 集合操作 测试

var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

var setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

console.log("setA: " + setA.values());
console.log("setB: " + setB.values());

// 测试并集 
var unionAB = setA.union(setB);
console.log('并集测试： ')
console.log(unionAB.values());

// 测试交集
var intersectionAB = setA.intersection(setB);
console.log('交集测试： ')
console.log(intersectionAB.values());

// 测试差集
var differenceAB = setA.difference(setB);
console.log('差集测试： ')
console.log(differenceAB.values());

// 测试子集
var setA = new Set();
setA.add(1);
setA.add(2);

var setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

var setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

console.log('子集测试： ');
console.log(setA.subset(setB));
console.log(setA.subset(setC));