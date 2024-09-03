/**
 * map, filter, reduce, forEach,
 * 
 * template literals
 * destructing
 * import and exports
 * 
 * 
 * map -- map fun is used to iterate over the array and perform some action and it returns the new array
 * 
 * 
 */


// .....MAP.....

var arr = [10, 30, 5, 6, 4, 21]

// double the nums...
let doubles = []

for (ele of arr){
    doubles.push(ele * 2)
}
console.log(doubles)


// squares of nums....

let squares = arr.map(ele => ele * ele)
console.log(squares)



// FILTER....


var ages = [40, 16, 32, 15, 10, 25, 21]

// regular method..
let adultages = []
for (let age of ages){
    if (age >=18){
        adultages.push(age)
    }
}

console.log(adultages)

// using filter method...
let newAges = ages.filter(age => age >= 18)
console.log(newAges)


let mapNewAges = ages.map(age => age >= 18)
console.log(mapNewAges)



// reduce...
let arr2 = [2, 6, 7, 2, 10, 4]

let sum = arr2.reduce( (total,ele) => total + ele)

console.log(sum)

// assignment : write the regular way to find the sum of all eles in an array..


/**
 * template literals
 *      mahesh scored 25 marks
 */

let name = "mahesh"
let marks = 25

console.log(name, "scored", marks, "marks")

console.log(`${name} scored ${marks} marks`)


let  persons = [
    {name : "mahesh", age: 25},
    {name : "rajesh", age: 35},
    {name : "kiran", age: 30},
    {name : "ravi", age: 20},
]


for (let person of persons){
    console.log(`${person.name} is ${person.age} years old`)
}


// destructuring...

let obj = {person : "mahesh", age: 25, contact: 3775397589}

// console.log(obj.name)
// console.log(obj.contact)

let {person, age, contact} = obj

console.log(person)


