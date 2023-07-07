// let anon_func = function () {
//     console.log("I am anonymous func")
// }

// anon_func()




// setTimeout(functionToCall,time_in_ms)
// start a timer for time_in_ms, after the timer expires
// it will execute the functionToCall

// function func(){
//     console.log("I am called ")
// }
setTimeout(function() {
    console.log("I am called ")
},1000)


//you want to create a anonymous function and execute it immediately
(function() {
    console.log("Immediately Invoked function execution")
})()

let anon_func = function () {
    console.log("I am anonymous func")
}

anon_func()

// arrow function

let annon_func2 = () => {
    console.log("arrow func")
}
annon_func2()

// body is just one line

let add = (a,b) => a+b
console.log(add(1,2))

// default parameters

function say(message="Hello"){
    console.log(message)
}

say()// say(undefined)
say("Hi")
say(undefined)

// a and b are mandatory parameters
// if user doesnot provide a and b throw an error
function requiredArg(){
    throw new Error('The argument is required')
}
function sum(a=requiredArg(),b=requiredArg()){
    return a+b
}

sum(1) // sum(1,undefined)




