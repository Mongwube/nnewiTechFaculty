document.getElementById('registerForm').addEventListener('submit', function(event){
    event.preventDefault();
    const user = {
        Name: document.getElementById('name').value,
        Email: document.getElementById('email').value,
        Phone: document.getElementById('phone').value,
        Username: document.getElementById('username').value,
        Password: document.getElementById('password').value,
    }

    const users = JSON.parse(localStorage.getItem('users'))  || [] 
    users.push(user)

    localStorage.setItem('users', JSON.stringify(users))
    alert('Registered Successfully')
    window.location.href = 'login.html'
})