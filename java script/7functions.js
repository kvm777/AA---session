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


