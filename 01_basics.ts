// simple variable 
const message = "Hello World" // each abstract value has a different form of behaviour

// The above const can be covered to uppercase
console.log(message.toUpperCase())

const num = 43
// Assume a variable not holding a string is supplied with .toLowerCase or .toUpperCase
// There will be a raise of an error
// console.log(num.toLowerCase())


// function typescripts
function fn(x) {
    return x.flip();
   }
   
// console.log(fn("Heelo"))
// console.log(fn(123))

// the above function hits an error

// Non Exceptional Errors
const User = {
    name : "Daniel",
    age : 16
}
// console.log(User.location) // this returns undefined

// typos
const announcement = "This is an announcement";

// How quickly can you spot the typos?
console.log(announcement.toLocaleLowerCase())
console.log(announcement.toLocaleLowerCase())
