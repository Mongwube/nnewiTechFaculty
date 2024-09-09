/*
String operator is the combination of two or more values in one variable to make a sentence
Types of strings operators
* Arithemetic 
* Assignment
* Template
* Concat
* Array
*/

// Assignment string operator

let y = 'hello'
let x = 'world'
let result = y + "  " + x
console.log(result)

// Arithemetic 
let a = 'John'
    a += ' Doe'
    console.log(a)

// Template 
const dom = document.createElement('div')

let ike = 'king'
let emma = 'emmanuel'
let result1 = `${ike} ${emma}`
dom.innerHTML = result1
document.body.appendChild(dom)

// Concat
let me = 'ebuka'
let r = 'gideon'
let result2 = me.concat(' ' , r)
console.log(result2)


// Array.join


let array = ['emmanuel','nnaemeka']
let rename = array.join(' ')
function change(){
    let dom = document.querySelector('.big')
dom.innerHTML = rename
}




