let btn = document.getElementById("submit")
let htmlele = document.getElementById("output")


btn.onclick = function(){
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")

    // make this html should be empty...
    htmlele.innerHTML = ""
    
    num1 = Number(num1.value)
    num2 = Number(num2.value)

    console.log(num1)
    console.log(num2)

    let sum = `sum of ${num1} and ${num2} is ${num1 + num2}`;

    console.log(sum)

    htmlele.innerHTML += sum;
}




