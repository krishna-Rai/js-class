// reduce(Fn,initialValue?) -> this is used to accumulate the array to a single value
// if we dont pass initialValue , then the callback Fn is invoked starting
// from second element, otherwise it will get invoked starting from first 
// element

// if initital value passed
// for the first call on first element
// prevValue = initial Value, currentValue = first element


// if initital value is not passed
// for the first call on second element
// prevValue = arr[0] , currentValue = arr[1]

// Fn(prev,curr,currentIndex,array)

let numbers = [1,2,3,4,5]

let sum = numbers.reduce((prevValue,currentValue)=>{
    return prevValue + currentValue
})
console.log(sum)

let Cart = [
    {
        product: "Phone",
        qty: 1,
        price: 5000
    },
    {
        product: "TV",
        qty: 1,
        price: 500
    },
    {
        product: "Washing machine",
        qty: 1,
        price: 6000
    },
]

// total price

let total_price = Cart.reduce((num,a,b)=>{
    return prev + curr.qty * curr.price
},0)
console.log(total_price)

// prev and curr are the parameter to the callback Fn
// initialValue (0) is the second arg to the reduce function