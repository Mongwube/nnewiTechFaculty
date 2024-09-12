var swiper = new Swiper('.fade', {
    spaceBetween: 30,
    effect: 'fade',
    autoplay:{
        delay:7500,
        disableOnInteraction: false
    }
})


var swiper = new Swiper('.text-space',{
    spaceBetween: 30,
    effect: 'circle',
   
})


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const lastnameInput = document.querySelector('#lastname')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')

const togglePassword = document.querySelector('#toggle-password')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)
togglePassword.addEventListener('click', togglePasswordVisibilty)

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || lastnameInput.value === '' || emailInput.value === '' || passwordInput.value === ''){

        msg.classList.add('error')
        msg.innerHTML = 'Stop acting childish and put info before submitting '
        setTimeout(()=> msg.remove(), 10000)

    }else{
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(
           `${nameInput.value}: ${lastnameInput.value}: ${emailInput.value} :
            ${passwordInput.value}
           ` 
        ))

        userList.appendChild(li);

        nameInput.value = ''
        lastnameInput.value = ''
        emailInput.value = ''
        passwordInput.value = ''

    }
}


function togglePasswordVisibilty(){
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text'
        togglePassword.textContent = 'Hide'
    }else{
        passwordInput.type = 'password'
        togglePassword.textContent = 'Show'
    }
}


