//DOM : Docunment Object Model : is a programing interface for web development

// Element for selecting object in HTML
// Changing content
// changing styles
// Changing atributes
// Adding Toggle and Removing classes
// Handling events
// Creating and Apending Element

// Element used in selecting OBJECT from HTML

// * docunment.querySelector()
// * docunment.getelementByid()
// * docunment.getelementByTagName()
// * docunment.getelementByClassName()
// * docunment.querySelectorALL()


  

// Changing content

let variable = document.querySelector(".text")

console.log(variable)

// Key word used in changing content in DOM are innerHTML , textContent:
variable.textContent = 'hello world'

variable.innerHTML = '<h3>another one</h3>'

// Changing Style 

variable.style.color = "red"
variable.innerHTML = '<h2 style = "color:blue;">nav bar</h2>'

// Changing Atributes

let link = document.querySelector('a')
    link.setAttribute('href', "https://t.me/Ionet_airdrop_bot?start=r07896349245" )
let herf = link.getAttribute('href')    
    // link.removeAttribute('href')

// changing image

var img = document.getElementById('myimage')

let value = img.getAttribute('src')
    img.setAttribute('src',"dessert1.jpeg")
    img.style.width= '100px'


// Adding Toggle and Removing classes

let add = document.querySelector('.add');
add.classList.add('moving')
add.classList.remove('moving')
add.classList.toggle('moving')
add.classList.toggle('moving')

// Handling Event 

add.addEventListener('click', ()=>{
    add.classList.toggle('moving')
  
})
let slideMeanu = document.querySelector('.slide')
let slide = document.querySelector('.slide2')
let body = document.querySelector('body')

slide.addEventListener('click', ()=>{
    body.classList.toggle('boxMove')
})
// slideMeanu.addEventListener('click', ()=>{
//     body.classList.remove('boxMove')
// })