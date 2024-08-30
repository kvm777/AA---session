/*
    conditional statements - 
        - if the condition is true ... the statements within block are excicuted
    
    types of connditional staments in JS
        1) if, else if, else
        2) switch statements
        3) ternary operator (ES6+)
*/



let age = 10;

if (age >= 18){
    console.log("voter eligibility")
}

else{
    console.log("not eligible")
}

// else if statements...
console.log("\n else if statements...")

let marks = 90

if (marks >=80 ){
    console.log("A grade");
}

else if (marks >= 60){
    console.log("B grade");
}


else if (marks >= 40){
    console.log("C grade");
}

else{
    console.log("fail")
}


// switch statements
console.log("\n switch statemts")

let day = 10

switch(day){
    case 1:
        console.log("sunday")
        break

    case 2:
        console.log("monday")
        break

    case 3:
        console.log("tuesday")
        break

    case 4:
        console.log("wednesday")
        break

    case 5:
        console.log("thursday")
        break

    case 6:
        console.log("friday")
        break

    default:
        console.log("unknown")
}


// ternary operators...

console.log("\n ternary operators...")



let value = 50;

let output = (value >=60 ) ? "pass" : "fail"

console.log(output)


// let val = window.prompt("enter a val");
let val = 50;

let out2 = (val >= 80) ? "A grade" : (val >= 60) ? "B grade" : (val >= 40) ? "C grade" : "fail"

console.log(out2)

