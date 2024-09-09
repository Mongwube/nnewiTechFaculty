const getUserData = function(userid){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users[userid - 1]
        if(user){
            resolve(user)
        }else{
            reject('user invalid')
        }
        }, 1500 )
    })
}

const userTable = document.getElementById('userTable')
const users = JSON.parse(localStorage.getItem('users')) || [];
users.forEach((_ , index) =>{
    getUserData(index + 1)
    .then(user =>{
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.username}</td>
        `
        userTable.appendChild(row)
    })
    .catch(error => console.log(error))

})
// pomise is an object that represent a code that will run i future
