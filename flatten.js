let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
console.log(arr)
// flatten
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function flatten(arr,n){
    let flattened_arr = []
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i]) && n!=0){
            // flattened_arr.push(...flatten(arr[i])) // [7,8,9,10,11,12]
            let temp = flatten(arr[i],n-1) // [4,5,6]
            for(val of temp)
              flattened_arr.push(val)
        }else{
            flattened_arr.push(arr[i])
        }
    }
    return flattened_arr
}

console.log(flatten(arr,2))

// [1,2,3,[4,5,6,[7,8]]], n=2
