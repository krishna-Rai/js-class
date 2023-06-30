// undefined type
// is a primitive data type that has only one value "undefined"

let counter
console.log(counter)
console.log(typeof counter)


// null type
// primitive type that has only one value "null"

let x = null
console.log(x)
console.log(typeof x)  // known bug inside js , 

// number
// represent both integer and floating point numbers

let sum = 100
let price = 12.4

let growth = -23

// String -> a sequence of characters 

let greeting = 'Hello'
let msg = "Hello World"
console.log(greeting)
console.log(msg)

let str = 'I am a "string" now';
let str2 = "I am a 'string'";
console.log(str)
console.log(str2)

let str4 = 'I want to use \' ';
console.log(str4)

let str3 = `I am also a string in backticks`
console.log(str3)

let name = 'Raj'
let age = 100

let intro = 'My name is ' + name + 'and my age is ' + age
let intro2 = `My name is ${name} and my age is ${age}`
console.log(intro)
console.log(intro2)

function sayHi(){
    return "Hi"
}
let intro3 = `Raj ${2+3}`
console.log(intro3)


// boolean 
let completed = true
let done = false

console.log(typeof completed)



