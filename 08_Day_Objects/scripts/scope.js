// Global scope
let a = 'JavaScripts' // is a global scope will be found anywhere in this file
let b = 10 // this is a global scope variable and found in the window object

function letsLearnScope() {
    console.log(a,b)
    let valid = false
    // block scope
    if(true) {
        let a = 'Python'
        let b = 100
        let c = 30
        let d = 40
        valid = !valid
        console.log(a,b,c,valid)
    }
    console.log(a,b,valid)
}

letsLearnScope()
console.log(a,b)
