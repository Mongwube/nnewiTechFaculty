const stylelist = document.createElement('style')
stylelist.type = 'text/css' 
const popup = document.createElement('div')
popup.className = 'popup'
document.body.appendChild(popup)


const toggleButton = document.createElement('button')
toggleButton.innerText = 'toggle here'
document.body.appendChild(toggleButton)

const closeButton = document.createElement('button')
closeButton.textContent = 'close button'
popup.appendChild(closeButton)


document.addEventListener('DOMContentLoaded', ()=>{
    const togglepopup = () =>{
        if (popup.style.display ==='none'){
            // if (5 === 5){
            popup.style.display = 'block'
            console.log('true it work')
        } else{
            popup.style.display = 'none'
        }

}
    toggleButton.addEventListener('click', togglepopup)

    closeButton.addEventListener('click', togglepopup)

})


stylelist.innerHTML =  `

.popup{
height: 20rem;
width: 50rem;
background: #ccc;
position: fixed;
margin-top: 7rem;
margin-left: 5rem;
display: none;
}


`

document.body.appendChild(stylelist)
