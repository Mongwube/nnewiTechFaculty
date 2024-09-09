const container = document.createElement('div')

container.style.background = "#fff"
container.style.boxShadow = '0 0 10px rgb(0, 0, 0, 0.8)'
container.style.width = '60%'
container.style.height = '20rem'
container.style.borderRadius = '1.5rem'
container.style.marginLeft = '15rem'
container.style.marginTop = '4rem'
container.style.paddingTop = '2rem'

document.body.appendChild(container)



const head = document.createElement('h1')

head.innerHTML = 'Profile'
head.style.color = 'gold'
head.style.fontSize = '20px'
head.style.textAlign = 'center'

container.appendChild(head)

const list = document.createElement('ul')
list.style.marginLeft = '1rem'

container.appendChild(list)

const items = [
    {
        text:'help' ,
        src:'dessert1.jpeg'
      

    },
    {
        text: 'help',
        src:'dessert1.jpeg'
       

    },
    {
        text: 'help',
        src:'dessert1.jpeg'
       


    }
]
items.forEach(item =>{
    const listItems = document.createElement('li')
    listItems.style.lineHeight = 1.5
    listItems.style.borderBottom = '1px #000 solid'
    listItems.style.listStyle = 'none'

    const Img = document.createElement('img')
    Img.innerHTML = item.text
    Img.setAttribute('src', item.src)
    Img.style.width = '40px'
    Img.style.borderRadius = '100%'

    listItems.appendChild(Img)
    list.appendChild(listItems)
})
// const items = [
//     {
//         text: 'Javascript  Blog',
//         src: 'dessert1.jpeg'
//     },

//     {
//         text: 'Javascript  Blog',
//         src: 'dessert1.jpeg'
//     },

//     {
//         text: 'Javascript  Blog',
//         src: 'dessert1.jpeg'
//     }

    
// ]

// items.forEach(item =>{
//     const listItems = document.createElement('li')
//     listItems.style.lineHeight = 1.5
//     listItems.style.borderBottom = '1px #000 solid'

//     const Img = document.createElement('img')
//     Img.innerHTML = item.text
//     Img.setAttribute('src', item.src)
//     Img.style.width = '40px'
//     Img.style.borderRadius = '100%'

//     listItems.appendChild(Img)
//     list.appendChild(listItems)
// })






