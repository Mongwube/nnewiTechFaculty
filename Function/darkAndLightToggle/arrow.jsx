// //function declared(){}
// //const expression = function(){}

// const arrow =(text)=>{
//     console.log(text)
// }
// arrow('code editor')


// document.addEventListener('DOMContentLoaded', ()=>{

//     console.log('forever fresh ')

// })

// //parameter
// //addEventListener
// //scope

document.addEventListener('DOMContentLoaded',()=>{
    const toggleButton = document.getElementById('Toggle-button')
    const themelink = document.getElementById('theme-link')


    const setTheme = (theme) =>{
        if(theme === 'dark'){
            themelink.href = 'dark.css'
            console.log('true')
            localStorage.setItem('theme','dark')
        } else{
            themelink.href = 'light.css'
            console.log('false')
            localStorage.setItem('theme','light')
        }
    }

    const currentTheme = localStorage.getItem('theme')  || 'dark'
    setTheme(currentTheme)

    toggleButton.addEventListener('click', ()=>{
        const newtheme = localStorage.getItem('theme') === 'light' ? 'dark' : 'light'
        setTheme(newtheme)
    })
})