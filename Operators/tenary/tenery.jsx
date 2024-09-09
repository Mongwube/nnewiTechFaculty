 
/* Tenary operator is a conditional operator which provide a short hand way of exacuting 
one or two experession based on given condition
*/ 

// const num = document.createElement('div')

// num.innerHTML = '0'
// let a = 0

// document.body.appendChild(num)

// function toggle(){
//      a = a + 1  
//      let display = (a<10)? '0'+ a:a
//      num.innerHTML = display
// //      a = (a<10)? '0' + a : a 
// }
// toggle()
// toggle()
// toggle()
// toggle()
// toggle()
// toggle()
// toggle()
// toggle()
// toggle()
// toggle()
// toggle()
// toggle()
// toggle()
// toggle()


let container = document.createElement('div')
container.style.display = 'flex'
container.style.background = 'black'
container.style.height = '5rem'
container.style.color = 'white'                               
container.style.gap = '1rem'
container.style.cursor = 'pointer'
container.style.width = '10rem'
document.body.appendChild(container)

let plus = document.createElement('span')   
plus.innerHTML = '+' 

let sum = document.createElement('span')
 sum.innerHTML = '0'

let minus = document.createElement('span')
 minus.innerHTML = '-'

 let savebtn = document.createElement('button')
 savebtn.style.background = '#000'
 savebtn.style.color = '#fff'
 savebtn.style.border = 'none'
 savebtn.style.cursor = 'pointer'

 let icon = document.createElement('span')
 icon.className = 'material-icons'
 icon.textContent ='save'
 savebtn.appendChild(icon)
 document.body.appendChild(savebtn)

 let x = 0
 

 plus.addEventListener('click', ()=>{
    x++
    x = (x < 10) ? '0' + x:x
    sum.innerHTML = x
    isModified = true
 }) 

 minus.addEventListener('click', ()=>{
    if(x > 0){
        x--
        x =( x <10) ? '0'+ x:x
        sum.innerHTML = x
        isModified = true
    }
 })

 savebtn.addEventListener('click',()=>{
    if(!isModified){
        alert('try and click increment or decrement button before ')
    }else{
        let savevalue = x;
        localStorage.setItem('savevalue', savevalue)
        alert('saved item:'+ savevalue)
    }
   
 })
container.appendChild(plus)
container.appendChild(sum)
container.appendChild(minus)
document.body.appendChild(container)
