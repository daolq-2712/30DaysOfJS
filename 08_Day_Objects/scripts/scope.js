// Window Global Object
a = 'JavaScripts' 
b = 10 // this is a global scope variable and found in the window object

function letsLearnScope() {
    console.log(a,b)
    if(true) {
        console.log(a,b)
    }
}

letsLearnScope()
console.log(a,b)
