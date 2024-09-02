/**
 * objects - object which holds the properties and the functions
 * 
 *      -it defined with curly brackets {}
 * 
 */


let obj = {
    name : "mahesh", 
    age : 30,
    marks: 50,
    "num" : 500,

    add : (a, b) => {
        console.log(a + b)
    },

    // this keyword is not working with arrow function..
    fun1 : () => {
        console.log(this.marks)
    },

    fun2 : function(){
        console.log(this.marks)
    },
}

// accessing...

console.log(obj.name)
console.log(obj.marks)
console.log(obj["num"])
obj.add(2, 5)
obj.fun1()
obj.fun2()


