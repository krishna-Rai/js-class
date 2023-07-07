// var num = 100
// function square(num){
//     var ans = num * num
//     return ans
// }
// var squaredNum = square(num)
// var squaredNum2 = square(squaredNum)
// console.log(squaredNum)
// console.log(squaredNum2)

setTimeout(function() {
    console.log("I am called ");
}, 1000)

(function() {
    console.log("Immediately Invoked function execution");
})()
