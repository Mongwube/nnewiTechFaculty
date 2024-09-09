document.getElementById('loginform').addEventListener('submit', function(event){
    event.preventDefault();
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const users = JSON.parse(localStorage.getItem('users'))  || [] 
    const user = users.find(u => u.username === username || u.password === password )
    if(user){
        localStorage.setItem('currentUser', JSON.stringify(user))
        alert('login successful')
        window.location.href = 'dashboard.html'
    }else{
        alert('invalid Username or Password')
    }

})
  