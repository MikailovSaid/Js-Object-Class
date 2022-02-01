class MyArray {
    constructor() {
        this.argument = arguments;
    }

    findItem(condition) {
        for (const item of this.argument) {
            if (condition(item)) {
                return item;
            }
        }
    }

    pushItem(newItem) {
        return (this.argument[this.argument.length++] = newItem);
    }
}

let arr = new MyArray(10, 11, 12, 13, 14);
console.log(arr);
console.log(arr.pushItem(15));

function checkNumber(number) {
    return number > 13;
}
console.log(arr.findItem(checkNumber));
