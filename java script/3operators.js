/*
    the operators and operands

    if eg:  a+b
        a,b -- operands
        + -- operator

    there are 3 types of operators in JS
        1) arthematic operators ...(+,-,*,/, % )
        2) assignment operators ...(+=, -=, *=, /= )
        3) comparission operators ...( ==, ===, !=, >=, <=, <, > )
*/


let a = 20
let b = 5

// arthematic operators

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

// assignement operators

a -= 10     //a = a-10
console.log(a)
a += 5      //a = a+5
console.log(a)
a *= 3      //a = a*3
console.log(a)
a /= 5      //a = a/5
console.log(a)


// comparission operators

console.log( 10 == 20 )
console.log( 10 == '10')
console.log( 10 === '10')

// == is defines to check wether both the values are equal or not
// === is check the datatype also along with value

console.log( 10 <= 20 )
console.log( 10 >= 20 )
console.log( 10 < 10 )
console.log( 10 > 10 )
console.log(10 != 20)