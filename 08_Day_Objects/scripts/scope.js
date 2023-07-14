// Global scope
let a = 'JavaScripts' // is a global scope will be found anywhere in this file
let b = 10 // this is a global scope variable and found in the window object

function letsLearnScope() {
    console.log(a,b)
    if(true) {
        let a = 'Python'
        let b = 100
        console.log(a,b)
    }
    console.log(a,b)
}

letsLearnScope()
console.log(a,b)
