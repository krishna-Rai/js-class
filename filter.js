// filter(Fn) -> it will call the Fn on all the 
// elements one by one, and it will include the value 
// for which the return value is true otherwise discard 
// it
// return the values that are included


let cities = [
    {
        name: 'Los Angeles',
        population: 10000
    },
    {
        name: 'Delhi',
        population: 20000
    },
    {
        name: 'New York',
        population: 30000
    },
    {
        name: 'Mumbai',
        population: 50000
    },
    {
        name: 'Varanasi',
        population: 1000
    },
]

// filter the cities having population > 25000

filtered_cities = cities.filter((city)=>{
    if(city.population > 25000)
        return true
    else
        return false
})
console.log(filtered_cities)