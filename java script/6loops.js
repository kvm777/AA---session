/*
    loop -- loop which excicutes the block of code as soon as the condition is true..

    types of loops
        1) for loop
        2) while loop
        3) do while loop
        4) for.. in, for... of
    
    break 

    continue

*/

/*
    Syntex of for loop...
    for (initialisation; condition; iteration){
        block of statements....
    }
*/

console.log("for loop....")
for(let i = 1; i<=5; i+=1){
    console.log(i)
}

/**
 *  i =1 ... 1<=5 true
 *  i =2 ... 2<=5 true
 *  i = 3 ... 3<=5 true
 *  i = 4 ... 4<=5 true
 *  i = 5 ... 5<=5 true
 *  i = 6 ... 6<5 false.. 
 * 
 */

//write a code to print the numbers upto n which are divible by both 3 or 5

// 3,5,9,10,12,15....

/**
 * while loop
 *      initialisation;
 *      while (condition){
 *          block of statements...
 *          
 *          increment;
 *      }
 */


console.log("\nwhile loop...")

let i = 1;
while (i<=5){
    console.log(i)

    i+=1;
}


/**
 * do while...
 *      
 *      initialisation;
 *      do{
 *          block of statements...
 *          
 *          increment;
 *      } while (condition);
 *  
 */

console.log("\ndo while loop...");

let j = 1;
do{
    console.log(j);

    j+=1;
}while(j<=5);

/**
 *  for in... used for the iteration over the objects
 * 
 * for of... used for the iteration over arrays and strings
 * 
 */


let obj = {
    val1 : 30,
    val2 : 40,
    val3 : 50
}
 
for (value in obj){                 //value .. val1, val2, val3
    console.log(value, obj[value]) //obj[val1]
} 


arr = [10, 20, 30, 50, 60, 4]


// for (let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

for (ele of arr){
    console.log(ele)
}


s = "rajesh"

for (ele in s){
    console.log(s[ele])
}


/**
 * break ---
 *      break is used to terminates the loop
 * 
 * continue ---
 *      continue is used to terminates the iteration..
 * 
 */


for (let i = 0; i<=10; i++){
    if (i == 5){
        continue
    }

    console.log(i)
}


for (let i = 0; i<=10; i++){
    if (i == 5){
        break
    }
    console.log(i)
}

// print the number upto n which are not divible by 3 or 5

// arr = [10, 35, 50, 3, 6, 42, 33]
// out = squares of arr...
// out = remaindersof arr which divible by 1st ele 
//      [0,5, 0, 3, 6, 2, 3]


/**
 * aaabbbcccccdd
 *
 * a3b3c5d2
 * 
 * aaabbbcccffccdd
 *
 * a3b3c3f2c2d2
 * a3b3c5f2d2
 * 
 */


