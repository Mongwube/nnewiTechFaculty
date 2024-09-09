// let newdiv = document.createElement('div')

// newdiv.innerHTML = 'hello world'
// newdiv.style.color = 'red'
// document.body.appendChild(newdiv)


const container = document.createElement('div')


container.style.background = '#fff'
container.style.width = '50rem'
container.style.height = '25rem'
container.style.boxShadow = '0 0 10px rgb(0, 0, 0, 0.8)'
container.style.borderRadius = '10px'
container.style.marginLeft = '15rem'
container.style.marginTop = '5rem'
container.style.paddingTop = '1rem'
container.style.paddingLeft = '3rem'

document.body.appendChild(container)

const heading = document.createElement('h1')

heading.innerText = "My  Profile"
heading.style.textAlign = 'center'
heading.style.color = "green"
container.appendChild(heading)

const paragraph = document.createElement('p')

paragraph.innerHTML = ' Dom interaction is <br> a programing interface for building <br> web page '
paragraph.style.fontSize = '20px'
container.appendChild(paragraph)

const list = document.createElement('ul')
list.style.paddingLeft = '1rem'
list.style.listStyleType = 'none'

container.appendChild(list)
const items = [
    {
        text: 'Javascript Blog',
        href:  "https://t.me/Ionet_airdrop_bot?start=r07896349245"
    },

    {
        text: 'Html Blog',
        href:  "https://theme.getbootstrap.com/"
    },
    {
        text: 'Css Blog',
        href:  "https://theme.getbootstrap.com/"
    }
]

items.forEach(item => {
    const listitems = document.createElement('li')
    // listitems.style.borderBottom =  '1px solid #ccc ' 
    listitems.style.padding = '10 0px'

    const link = document.createElement('a')
    link.innerText = item.text
    link.setAttribute('href',item.href )
    link.style.textDecoration = 'none'
    link.style.color = '#000'
    link.style.lineHeight = 2.9
    listitems.appendChild(link)
    list.appendChild(listitems)
})

 

const btn = document.createElement('button')
btn.innerText = 'Click here'
btn.style.backgroundColor = 'blue'
btn.style.color = '#fff'
btn.style.boxShadow = '0 0 10px rgb(0, 0, 0, 0.1)'
btn.style.height = '3rem'
btn.style.width = '9rem'
btn.style.borderRadius = '10px'
btn.style.border = '3px #ccc solid'
btn.style.cursor = ' pointer'

container.appendChild(btn)

btn.addEventListener('click', ()=>{
    btn.classList.add(
        btn.innerText = 'Submitted'
    )
    btn.style.background = 'gold'
    btn.style.color = 'black'
}) 