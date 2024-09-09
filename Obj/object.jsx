// Obeject of representing collection of key value pairs

// how to create object
// Plain object syntax

var person = {
    name: 'emmanuel', 
    age: 16
}


// object construction

// var person = new object()
// person.name = 'emmanuel',
// person.age = 16

// how function interact with object

// * object as function parameter
//  * returning object from functions
// * methods in object
// * this keyword

// * object as function parameter


var person = {
    name: 'emmanuel', 
    age: 16
}

function displayperson (person){
    console.log('Name: ' + person.name ) 
    console.log('Age '+ person.age )
}
displayperson(person)


var me = {
    name: 'emmanuel', 
    age: 16
}

const g = function(me){
    console.log('Name: ' + me.name ) 
    console.log('Age '+ me.age )
}
g(me)


// * returning objects from function

function createId (gender, is_married){
    return{
        gender : gender,
        is_married: is_married
    }
}
let santos = createId('male', true)
console.log(santos.gender)
console.log(santos.is_married)


const arrow = (gender, is_married)=>{
    return{
        gender : gender,
        is_married: is_married
    }
}
let king = createId('male', true)
console.log(king.gender)
console.log(king.is_married)

// * Method in object
let welcomeMessage = {
    name1 : 'chisom',
    greet : function(){
        console.log('welcom to nnewi tech, ' + this.name1 + ' !' )
    }
  

}
welcomeMessage.greet()

// * this key word

let studentInfo = {
    email : 'fuckup@email.com',
    nin_number : 4323567,
    updateInfo : function(update , emailupdate ){
        this.nin_number = update
        this.email = emailupdate
    }
}
studentInfo.updateInfo(6346553535 , 'postUtme@gmai.com')

console.log(studentInfo.nin_number)
console.log(studentInfo.email)