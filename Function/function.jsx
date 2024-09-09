/*
.... Most popular Function
Declared Function / Function Declearation
Function Expression
Arrow function
Anonymous Function
Immediately Invoked Function Expression (IIFE)
Constructor Function
Method Function


....less popular function
Named Function Expression
Generator Function
Async Function
Class Function
Higher-Order Function

*/
// Declared Function / Function Declaeation : the whole function are being declared

function declared(){
    console.log('hello world')
}

declared()


// Function Expression :  is when a varible being attached to a function

const expression = function(){
    console.log('expression')
}
expression()

// Arrow function : 

const arrow = ()=>{
    console.log('arrow function')
}
arrow ()

//Anonymous Function
setTimeout(() => {
    console.log('anonymous')
}, 1000);





setTimeout(() => {
    console.log('anonymous')
},2000 );


// Immediately Invoked Function Expression (IIFE)

(function(){
    console.log('immediate')
})()

// Constructor Function : its has two key word new: is used in creating object, and this : its is used to refer to an object
function Person(name, age){
    this.name = name
    this.age = age
}
const person = new Person('emmanuel', ' 18')
console.log(person.name)
console.log(person.age)

// Method Function : its comes in place of an object

const obj = {
    greeting(){
        console.log('welcome')
    }
}
obj.greeting()


