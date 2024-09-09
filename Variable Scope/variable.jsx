/* Variables are  containers that stores value or data type in programing language 



Method of understanding variables 
i. initialization and declaration
ii. scope 
iii. hosting
iv. shadowing
v. interaction with dom



*/

// let y = 3
// console.log(y)


// initialization and declaration
// var,let and const are the key word for declaring a variable
// var can be a global scope whose variable can be declared and value can be updated
var x = 3
var x = 4
console.log(x)
//let  its cant redeclare a variable but can update it value
let y = 4
    y = 5
    console.log(y)


    const a = 10
        console.log(a)


//scope is a visibility of variable
//types of scope : Global scope, Functional sope, and block scope


//global scope : where variable are declared on top the function
var x = 'Global sope'

function toggle(){
    console.log(x)
}
toggle()

//functional scope : where variables are declared within the function
function print(){
    var x = "Functional scope"
    console.log(x)
}
print()

function cat(){
    let g = 8
    let s = 1
    result9 = g + s
    console.log(result9)
}
cat()

//block scope ; are declared with ({}).they dont need any function

var edit = 10
if (edit === 5){
    const v = "i'm sorry"
         c = 'babe'
        result = v + " " + c
        console.log(result)
}
else{ 
    if (edit = 10){
        const g = "i will be there"
            j = 'on time'
            result2 = g + " " + j
            console.log(result2)
    }

}

var u = 8
if (u === 8){
    const me = 'help'
        r = 'me'
        bot = me + " " + r
    console.log(bot)

}
 


//Hosting : its is how you wish to arrange your variable

//Shadowing: is when  variable of  outerspace (global scope) is same as the variable of innerspace (functional scope or blockscope)

let outerspace = 'outerspace'
{
    let outerspace = 'innerspace'
    console.log(outerspace)
}
console.log(outerspace)

//dom: Docunment Object Model: Dom is a programing interface for web docunment
//inetraction with dom 

let dom = document.querySelector('.dom')
// // console.log(dom)
dom.innerHTML = `<div style="background: green; height: 4rem; width: 100%;"></div>`

let dom1 = document.getElementById('ID')
 console.log(dom1)

 let dom2 = document.getElementsByclassName('class1')
 console.log(dom2)

 let dom3 = document.getElementsByTagName('div')
 console.log('dom3')

let dom4  = document.querySelectorAll('.pannel .pannel-btn button')
console.log(dom4)
  
