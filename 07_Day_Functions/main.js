// this is your main.js script
// declaring a function without a parameter
function functionName() {
    // code goes here
    console.log('QQQQ')
}

functionName() // calling function by its name and with parentheses

// function with a parameter & return values
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
}
  
console.log(sumTwoNumbers(10, 20))

// function with unlimited number of parameters
function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))
