// a callback function, the name of the function could be any name
const callback = (n) => {
    return n**2
}

// function that takes other function as a callback
function cube(callback, n) {
    return (callback(n)) * n
}

console.log(cube(callback,3))

const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2*n + 3*m + t
        }
        return doWhatEver
    }
    return doSomething
}

console.log(higherOrder(2)(3)(10))

const numbers = [1,2,3,4]
const sumArray = arr => {
    let sum = 0
    arr.forEach(function(element) {
        sum += element
    });
    return sum
}

console.log(sumArray(numbers))