// 字典
function Dictionary() {
    var items = {};

    this.has = function(key) {
        return key in items;
    }

    this.set = function(key, value) {
        items[key] = value;
    }

    this.remove = function(key) {
        if (this.has[key]) {
            delete items[key];
            return true;
        }
        return false;
    }

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    }

    this.values = function() {
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    }

    this.getItems = function() {
        return items;
    }

    this.clear = function() {
        items = {};
    }

    this.size = function() {
        return Object.keys(items).length;
    }

    this.keys = function() {
        var results = [];
        for (var k in items) {
            if (this.has(k)) {
                results.push(k);
            }
        }
        return results;
    }

}

var dictionary = new Dictionary();
dictionary.set("person1", "1111111");
dictionary.set("person2", "222");
dictionary.set("person3", "333");

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get("person1"));
console.log(dictionary.getItems());