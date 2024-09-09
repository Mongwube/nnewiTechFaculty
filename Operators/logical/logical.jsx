// Logical operator are the operator that manipulate a boolean value and evaulate a condation
// Types of logical operator
// * Logical AND &&
// * Logical OR ||
// * Logical NOT !

// // Logical AND
// let x = 60
// let y = 50

// if(x > 0 && y > 0){
//     console.log('true it work')
// }

// // Logical OR
// let t = 60
// let l = 50

// if(t > 0 || l > 87){
//     console.log('true it work')
// }


// const button = document.getElementById('button')
// const menu = document.getElementById('menu')
// let x = 60
// let y = 50
// document.addEventListener('DOMContentLoaded', ()=>{
//     togglepop = () =>{
//   n      if(x > 0 && y > 0){
//             menu.style.marginLeft = '1rem'
//             x = 0
//             y = 50
//         }else{
//             menu.style.marginLeft = '-25rem'
//             x = 60
//             y = 50
//         }
//     }
//     button.addEventListener('click', togglepop)

// })


const button = document.getElementById('button')
const menu = document.getElementById('menu')
const deletex = document.getElementById('delete')
let x = 20
let y = 30
document.addEventListener('DOMContentLoaded', ()=>{
    popin = () =>{
        if(x >2 && y >2){
            menu.style.display = 'block'
            x = 0
            y = 30
        }else{
            menu.style.display = 'none'
            x = 20
            y = 30
        }
    }
    button.addEventListener('click', popin)
    deletex.addEventListener('click', popin)

})


// const button = document.getElementById('button')
// const menu = document.getElementById('menu')
// let x = 20
// let y = 30
// document.addEventListener('DOMContentLoaded', ()=>{
//     popin = () =>{
//         if(x >2 || y >0){
//             menu.style.display = 'none'
//             x = 0
//             y = 30
//         }else{
//             menu.style.display = 'flex'
//             x = 20
//             y = 30
//         }
//     }
//     button.addEventListener('click', popin)
// })