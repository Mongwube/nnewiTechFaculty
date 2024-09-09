


function seActiveLink(LinkClass, ActiveClass){
    const Currentpath = window.location.pathname.split('/').pop()
    const Nav_link = document.querySelectorAll('.' + LinkClass)
    
    Nav_link.forEach(link =>{
        const linkPath = link.getAttribute("href")
        if(linkPath === Currentpath){
            link.classList.add(ActiveClass)
        }else{
            link.classList.remove(ActiveClass)
        }
    })
}




window.onload = function(){
    seActiveLink("nav-link", "active")
}