// document.getElementById("btn")
//   function onclick() { 
//     alert("i am a dialog box!")
// }


// document.getElementById("btn")
// .onclick=function()
// {
//     alert("i am a dialog box!")
// }

// function show(){
//     document.getElementById("demo")
//     .style.display = "block";
// }

// function hide(){
//     document.getElementById("demo")
//     .style.display = "none";
// }


function change(){
    document.getElementById("me")
    .innerHTML = "help me"
}

let Img = document.getElementById('img');


function image(){
   let Img = document.getElementById("img")
     .src = "drink.png";
    img.style.width = "100px"

// var value =  Img.getAttribute('src');
//              Img.setAttribute('src', "drink.png" );
//              Img.style.width = "40px"

}


function rename(){
    let text = document.getElementById("text")
    .innerHTML = "get there"
    document.getElementById("text").style.fontWeight = "bold"
    document.getElementById("text").style.color = "gold"
    document.getElementById("text").style.fontSize = "20px"
}


function show(){
    document.getElementById("go")
    .style.display = "block"
}

function hide(){
    document.getElementById("go")
    .style.display = "none"
}

const sentence = "her name is 'peace'"
const sentence1 = 'her name is "peace"'

document.getElementById("p")
.innerHTML = sentence + "<br />" + sentence1
// p.style.color = "red"
p.style.fontSize = "20px"

