
// declare an object
let person = {
    firstName : "John",
    lastName : "Doe",
    'state': 'Delhi',
    'building no': 5000
}

//access properties of an object

// 1. dot operator

console.log(person.firstName)
console.log(person.state)

// 2. []

console.log(person['firstName'])
console.log(person['building no'])

console.log(person.age)

// modify the value of a property

person['lastName'] = 'Dayal'
console.log(person)

// add a new propperty to the object
person.age = 50
console.log(person)

// deleting a property

delete person.state
console.log(person)

// check if a property exists on the object

console.log('state' in person)
console.log('firstName' in person)

