// function -> what is a function?
// that executes a specific code and can be used again
// DRY


// declare a function

// function functionName(parameters){
//     // function body
// }

function say(){
    console.log("Hello World")
}

function square(a){
    return a*a;
}

console.log(square(100))
console.log(say())

// arguments object

function add(){
    let sum = 0
    for(let i=0;i<arguments.length;i++){
        sum+= arguments[i]
    }
    return sum
}
console.log(add(1))
console.log(add(1,2))
console.log(add(1,2,3))

// hoisting
// function hoisting

// you can use a function before declaring it

show()

function show(){
    console.log("I am hoisted")
}

// functions are first class citizens
// what this means -> you can treat functions like values

// function can taken as parameter
// function can be stored in a var
// function can be returned from another function


// storing functions in variables

function sum(a,b){
    return a+b;
}

let addFunc = sum
console.log(sum(1,2))
console.log(addFunc(1,2))

// passing a function to another function

function average(a,b,sumFn){
    return sumFn(a,b) / 2;
}


console.log(average(1,2,sum))


// function genAvg(){
//     let sum = 0
//     for(val of arguments){
//         sum+=val
//     }
//     return sum / arguments.length
// }

// console.log(genAvg(1,2,3,4,5))


// return a function from another function

// function func(a,b){

//     function sum(c){
//         return a+b+c;
//     }
//     return sum
// }

// let func2 = func(1,2)
// console.log(func2(3))

let products = [
    {
        name: 'Phone',
        price: 20000,
        rating: 5
    },
    {
        name: 'Headphone',
        price: 40000,
        rating: 1
    },
    {
        name: 'Laptop',
        price: 500000,
        rating: 4
    }
]

// sort the products array by price of the product

// [4,2,5,1,7,6]
// [1,2,5,4,7,6]
// [1,2,5,4,7,6]
// [1,2,4,5,7,6]
// [1,2,4,5,6,7]

function selSortByPrice(products){
    for(let i=0;i<products.length-1;i++){
        // find min in array starting from index i
        let minIndex = i
        for(let j=i+1;j<products.length;j++){
            if(products[j].price < products[minIndex].price)
                minIndex = j
        }
        if(minIndex !== i){
            // swap the products
            let temp = products[i]
            products[i] = products[minIndex]
            products[minIndex] = temp
        }
    }
    return products
}

// selSortByPrice(products)
// console.log(products)

// sort the products by rating of products

function customSelSort(products,compareFn){
    for(let i=0;i<products.length-1;i++){
        // find min in array starting from index i
        let minIndex = i
        for(let j=i+1;j<products.length;j++){
            // if(products[j].price < products[minIndex].price)
            //     minIndex = j
            if(compareFn(products[j],products[minIndex]) < 0)
                    minIndex = j
        }
        if(minIndex !== i){
            // swap the products
            let temp = products[i]
            products[i] = products[minIndex]
            products[minIndex] = temp
        }
    }
    return products
}

// function compareBy(popertyName){
//     return function (a,b){
//         let x = a[popertyName]
//         let y = b[popertyName]
//         return x-y
//     }
// }

// compare two products
function compareProductByPrice(prodA, prodB){
    return prodB.price - prodA.price // pos, neg, 0
}

function compareProductByRating(prodA,prodB){
    return prodA.rating - prodB.rating
}

// customSelSort(products,compareProductByPrice)
// console.log(products)

// customSelSort(products,compareProductByRating)
// console.log(products)

products.sort(compareProductByPrice)
console.log(products)