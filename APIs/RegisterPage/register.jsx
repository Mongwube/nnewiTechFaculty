var swiper = new Swiper('.fade', {
    spaceBetween: 30,
    effect: 'fade',
    autoplay: {
        delay:700,
        disableOnInteraction: false
    }
})

var swiper = new Swiper('.text-space', {
    spaceBetween: 30,
    effect: 'circle',
})

//Form Code Activation

const myForm = document.querySelector('#myform')
const nameInput = document.querySelector('#name')
const lastNameInput = document.querySelector('#lname')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const passwordBtn = document.querySelector('#togglePassword')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)
passwordBtn.addEventListener('click', togglePasswordVisibility)

function onSubmit(e){
    e.preventDefault();
    if (nameInput.value === '' || lastNameInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
    msg.classList.add('error')
    msg.innerHTML = 'Kindly Put the Neccessary Information Before Submitting'
    setTimeout(() => msg.remove() , 10000)
    }else{
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(
            `
            ${nameInput.value}: ${lastNameInput.value}: ${emailInput.value} : ${passwordInput.value}
            `
        ))
        userList.appendChild(li);

        nameInput.value = ''
        lastNameInput.value = ''
        emailInput.value = ''
        passwordInput.value = ''
    }
}

function togglePasswordVisibility(){
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text'
        passwordBtn.textContent ='Hide'
    }else{
        passwordInput.type = 'password'
        passwordBtn.textContent ='Show'
    }
}
