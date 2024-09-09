const getUserData = function(studentid){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            
        const students = JSON.parse(localStorage.getItem('students')) || [];
        const student = students[studentid - 1]
        if(student){
            resolve(student)
        }else{
            reject('student invalid')
        }
        }, 1500 )
    })
}

const studentTable = document.getElementById('studentTable')
const students = JSON.parse(localStorage.getItem('students')) || [];
students.forEach((_ , index) =>{
    getUserData(index + 1)
    .then(student =>{
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.school}</td>
        <td>${student.jamb }</td>
        <td>${student.email}</td>
        `
        studentTable.appendChild(row)
    })
    .catch(error => console.log(error))

})