// what is an array
// array is an ordered list of values

// 1 . array can hold values of mixed types
// 2. you don't have to specify the size of the array while 
// declaration ( array is dynamic and auto-growing)

// create js array using Array constructor method

let scores = new Array(6)
console.log(scores)

let books = Array(5) // create an array with initial size = 5
console.log(books)

// let numbers = new Array(1,2,3, 'Red')
// console.log(numbers)

// array literal form 

let students = [] // this will create an empty array

let countries = ['India', 'US', 'Japan']
console.log(countries)

// access array elements

console.log(countries[0])
console.log(countries[1])
console.log(countries[2])

// find the length of an array

console.log(countries.length)

// Array manipulation methods

// 1. push -> used to add the element at the end of an array
// return value -> updated length

let numbers = [10,20,30]

let len = numbers.push(50)
console.log(len)
console.log(numbers)

// add or append multiple elements at the end of array

numbers.push(60,70,80,90)
console.log(numbers)

let colors = ['red', 'green', 'blue']
let more_colors = ['yellow', 'black', 'magenta', 'violet']

// for(let i=0;i<more_colors.length;i++){
//     colors.push(more_colors[i])
// }

// console.log(colors)

// for(let color of more_colors){
//     colors.push(color)
// }

// console.log(colors)

// 1. copying one array into another
// console.log(...more_colors)
// colors.push(...more_colors)
// console.log(colors)

// 2. merge two arary into new array

let new_colors = [...colors,...more_colors]
console.log(new_colors)

//3. passing args to functions

function sum(a,b,c){
    console.log(arguments)
    let sum = 0
    for(let arg of arguments)
        sum+=arg
    return sum
}

let nums = [1,2,3]
console.log(sum(...nums,1,2))

//4. clone an array

let arr = [1,2,3]

let new_arr = [...arr]
console.log(new_arr)


// array.pop() -> to remove the last element from an array
// return value -> the removed element

console.log(colors)

let last_color = colors.pop()

console.log(last_color)
console.log(colors)

let empty_arr = []

console.log(empty_arr.pop()) // undefined


// unshift() -> prepend and element to the array
// return value -> length of the updated array

console.log(numbers)

numbers.unshift(600,700,800)

console.log(numbers)


// shift() -> removes the first element from an array
// return value -> removed element

numbers.shift()
console.log(numbers)

// slice(start, stop) -> extracts a subset of an array

// start, stop-1

console.log(numbers)

console.log(numbers.slice(0,3))
console.log(numbers.slice())
console.log(numbers.slice(0,numbers.length))


// splice() -> delete existing elements, insert and replace new elements

// delete elements using splice

// splice(pos,num of elements, arg1,arg2...)
// pos -> index to start the operation
// num -> no of elements to delete (0) -> no deletion
// arg1,arg2.... -> elements you want to insert


let nums5 = [1,2,3,4,5]

console.log(nums5.splice(0,3))

// insert elements

let colors5 = ['red','green','blue']

console.log(colors5.splice(0,3,'purple','violet'))
console.log(colors5)

// indexOf(searchElement,fromIndex) -> returns the first 
// occurence of the elmement's index 

// fromIndex(optional) -> pos to start the search

// return -1 if the elmement is not present

let num6 = [10,20,30,10,50,20,70]

console.log(num6.indexOf(10,4))
