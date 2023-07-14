// a callback function, the name of the function could be any name
const callback = (n) => {
    return n**2
}

// function that takes other function as a callback
function cube(callback, n) {
    return (callback(n)) * n
}

console.log(cube(callback,3))