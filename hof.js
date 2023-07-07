// higher order functions -> the functions that take
// parameter as a function
// may return a function as return value

// builtin higher order functions
// map, filter, reduce, every , some, forEach


// Map function

let circles = [10,20,30]
// find and return an array of area of the circles
// [a1,a2,a3]

// let areas = []
// for(let i=0;i<circles.length;i++){
//     area = Math.PI * circles[i] * circles[i]
//     areas.push(area)
// }
// console.log(areas)

// I want to map the array of radius of circles to array of area of the circles


// using map function
// map(Fn) -> it applies the Fn to each of the elements and returns a new array
// with the return values of each the of the functions

// [1,2,3].map(fn)
// fn(elementOftheArray,index,array)

// fn(1) -> r1
// fn(2) -> r2
// fn(3) -> r3

// return value of map -> [r1,r2,r3]
// function findArea(radius){
//     return Math.PI * radius * radius
// }
// let areas = circles.map(findArea)
let areas = circles.map((radius)=>{
    return Math.PI * radius * radius
})
console.log(areas)

let numbers = [2,4,8]

let squares = numbers.map(Math.sqrt)
console.log(squares)

let arr = [10,20,30]
let map_arr = arr.map((element,index,array)=>{
    console.log(element+ "-- " + index + " --"+ array.toString())
    return element * 2
})
console.log(map_arr)