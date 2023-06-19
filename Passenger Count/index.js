// let count = 0
// let btn_ele=document.getElementById("count-el")
// let prev=document.getElementById("previous")

// function increment(){
//     count = count + 1
//     console.log(count)
    
//     btn_ele.innerText = count
// }

// function save(){
//     console.log(count)
// // the below code does not displays the right space of " - "
// // so change it to "textContent" 
//     // prev.innerText += count  + " - "
//     prev.textContent += count  + " - "
//     btn_ele.innerText = 0
//     count = 0
// }

let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let Sum = document.getElementById("sum-el")


function add(){
    let sum = num1 + num2
    Sum.textContent = "Sum: " + sum
}

function subtract(){
    let sum = num1 - num2
    Sum.textContent = "Sum: " + sum
}

function divide(){
    let sum = num1 / num2
    Sum.textContent = "Sum: " + sum
}

function multiplication(){
    let sum = num1 * num2
    Sum.textContent = "Sum: " + sum
}