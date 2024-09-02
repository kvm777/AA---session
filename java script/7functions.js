/**
 * function -- a block of code that performs a specific task and can be reused multiple times
 * 
 * types of functions in JS
 *      1) function declaration
 *      2) function expression
 *      3) arrow function
 *      4) Immediately Invoked Function Expression (IIFE)
 *      5) callback function
 *      6) recursion function
 * 
 * 
 * more things to know..
 *      default parameters
 *      return keyword
 *      rest parameters
 *      spreading
 *      scope of the function (local and global)
 *      
 */


/**
 * function declaration syntex
 *      function functionName(){
 *          block of statemnts
 *      }
 *      
 */


function functionDeclaration(){
    console.log("from the function declaration function....")
}

// calling of function...
functionDeclaration();


/**
 * function expression syntex
 *      
 *      const functionName = function(){
 *          block of statements...
 *      }
 * 
 *      function calling..
 *      functionName();
 * 
 */


const funExpr = function(){
    console.log("from the function expression ")
}

funExpr();


/**
 * arrow function
 *      
 *      const functionName = () => {
 *          block of statements....
 *      }
 * 
 *      
 *      functionName();
 * 
 */


const arrowFunc = () => {
    console.log("from the arrow function....")
}

arrowFunc();


/**
 * IIFE
 *      - we dont write the function calling
 *      - we have to call this function in declaration
 * 
 *      (function(){
 *          block of statements...
 *      })();
 *      
 *      (function functionName(){
 *          block of statements...
 *      })();
 * 
 */


(function(){
    console.log("from the IIFE")
})();



// parameters and default parameters...


const add = function(a, b=0){
    console.log(a+b)
}

// im passing b = 0 as the default parameter

add(2,3)
add(10)



const product = (a,b=1) => {
    console.log(a * b)
}

product(10, 13);
product(20)


// return keyword..

// num= 5
const factorial = (num) => {
    if (num < 0){
        return -1
    }
    if (num == 0){
        return 1
    }

    let f = 1
    for(let i=1; i<=num; i++){
        f *= i
    }

    // console.log(f)
    return f
}

let output = factorial(-10)
console.log("factorial output is",output)



// rest parameters...

// values to array.. is rest
    // we use rest ... when we create the function

// array to values... spreading
    // we use spreading... while function calling

const numberSum = function(...values){
    console.log(values)
    let out = 0
    for (let value of values){
        out += value
    }

    return out;
}

const sumValue = numberSum(1,3,5,7,4,33,22,10)
console.log(sumValue)


// spreading....

let arr = [10,20, 4, 5, 6]

console.log(Math.max(...arr))

//it expects the values.... max(1,4,7,2)


// local scope and global scope

/**
 * local scope --
 *      the scope of the variable is with in the function is called local scope.
 *
 * global scope --
 *      the scope of the variable is to the entire program is called global scope.
 * 
 */


var globalVar = "im the global variable"
const variableScope = function(){
    var localVar = "im the local variable"

    return localVar
}

console.log(globalVar)
// console.log(localVar)   //got the error of not-defined
console.log(variableScope())


// callback function
// passing one fun as argument to the another function


const outerFun = function(callback){
    console.log("from the outer function")

    callback()
}


const innerFun = function(){
    console.log("from the inner function")
}


outerFun(innerFun)


