// Finds the nth element in an array
var counter = 0;
var findNthElement = function(array, n) {
    //Constant time
    counter ++;
    if (array.length == 1) {
        return array[n];
    }
    // logarithmic time
    var middle = Math.floor(array.length / 2);
    if (n < middle) {
        return findNthElement(array.slice(0, middle), n);
    }
    else {
        return findNthElement(array.slice(middle, array.length), n - middle);
    }


};

console.log(findNthElement(Array(10000000),4999999))
console.log(counter)
counter = 0;
console.log(findNthElement(Array(10000000),999999))
console.log(counter)

//Best and worst case scenario are 1 step away



// Find a series of elements from an array

counter = 0;
var findElements = function(array, toFind) {
    var elements = [];
    counter ++;
    for (var i=0; i<toFind.length; i++) {
        var element = findNthElement(array, toFind[i]);
        elements.push(element);
    }
    return elements;
};


//This is both linear and exponential. Increasing the array length causes the steps to increase in a linear pattern. Adding more numbers to the to find array increases the steps exponentially

console.log(findElements(Array(10),[1,2]))
console.log(counter)

counter = 0;

console.log(findElements(Array(1000),[1,2]))
console.log(counter)

// The worst case is increasing the numbers to find. This causes the steps to increase exponentially. The best case is increasing the array length.



// Returns whether a number is odd or even
var isOdd = function(number) {
    var remainder = number % 2;
    return remainder == 1;
};

//This is constant time. It will always take the same amount of time. No matter how big the number is.