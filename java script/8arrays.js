/**
 * Array --
 *      array is the ordered collection of elements that are stored in a single variable
 *          - array is defined with square brackets []
 *          - all the elements are separated by (,)     
 *          - it follows the (0 - indexing)
 *          - it allows the positive and negative indexing
 *          
 * 
 *      let arr = [1, 4, 7, 2]
 * 
 *      push , pop
 *      unshift, shift
 *      at, [accessing..]
 *      
 *      slice, splice
 *      sort, reverse
 * 
 */


let arr = [1, 4, 7, 2]
console.log(arr)

let fruits = ["mango", "banana", "apple"]
console.log(fruits)

// push - the method to adding an element at the end of the array

fruits.push("grape")
console.log(fruits)

// unshift - the method to add an element at the beginning of the array

fruits.unshift("orange")
console.log(fruits)


// pop - the method is used to remove last element  of the array

fruits.pop()
console.log(fruits)

// shift - the method is used to remove first element  of the array

fruits.shift()
console.log(fruits)


// accessing elements in array

console.log(fruits.at(1))
console.log(fruits.at(-1))

// using templates []
console.log(fruits[1])
console.log(fruits[-1]) //undefined


// slice - extrat the some portion of array in array.


console.log(fruits.slice(0,2))
console.log(fruits.slice(1,2))  

// modifying the array..


/**
 * 
 * splice - method is used to modify the array
 * 
 * adding or inserting..
 *      arr.splice(index, 0, new element)
 * removing 
 *      arr.splice(index, deleteCount)
 * replacing
 *      arr.splice(index, deleteCount, new element)
 * 
 */

console.log(fruits)


// splice(index, no of elements, inserting eles)
fruits.splice(1,0, "kiwi")

console.log(fruits)

fruits.splice(3,0, "grape")

console.log(fruits)


fruits.splice(2,1)
console.log(fruits)

fruits.splice(2,1, "orange")
console.log(fruits)


// sorting
fruits.sort()
console.log(fruits)


// reversing an array..
fruits.reverse()
console.log(fruits)


let nums = [4, 6, 22, 50, 1, 20, 100, 10]

// nums.sort()
console.log(nums)

// assending of nums...
nums.sort((a,b) => a - b)
console.log(nums)

// descending of nums...
// nums.sort(function(a, b){return b-a})
nums.sort((a,b) => b-a)
console.log(nums)


