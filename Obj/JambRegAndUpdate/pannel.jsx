const storeData = JSON.parse(localStorage.getItem('userInfo')) || []

const populateTable = () =>{
    const tableBody = document.getElementById('userInfobody')
    tableBody.innerHTML = '' // so that table will have no existing row

    storeData.forEach(info => {
        const row = `
            <tr>
                <td>${info.jamb_reg}</td>
                <td>${info.nin_number}</td>
                <td>${info.user}</td>
                <td>${info.email}</td>
            </tr>
        `
        tableBody.innerHTML += row
    });

}
populateTable()

console.log(storeData)


const updateInfo = {
    jamb_reg : '',
    user : '',
    email : '' ,
    nin_number : '',

    updatData : function (NewjambReg, newNinNumber){
        this.jamb_reg = NewjambReg
        this.nin_number = newNinNumber
    },

    applyUpdate : function(studentInfo,NewjambReg, newNinNumber ){
        this.jamb_reg = studentInfo.jamb_reg
        this.user = studentInfo.user
        this.email = studentInfo.email
        this.nin_number = studentInfo.nin_number
        this.updatData(NewjambReg, newNinNumber)

        // Apply update
        studentInfo.jamb_reg = this.jamb_reg
        studentInfo.nin_number = this.nin_number


        localStorage.setItem('userInfo',JSON.stringify(storeData))
        populateTable()
    }
}

document.getElementById('updateForm').addEventListener('submit', function(event){
    event.preventDefault();

    const oldjambreg = document.getElementById('old_jamb_reg').value ;
    const userInfo = storeData.find(info =>{
        info.jamb_reg === oldjambreg && 
        info.nin_number === document.getElementById('nin_number').value &&
        info.user === document.getElementById('user').value &&
        info.email === document.getElementById('email').value
    }) 
    if(userInfo){
        const NewjambReg = document.getElementById('new_jamb_reg').value;
        const newNinNumber = document.getElementById('new_nin_number').value;

        updateInfo.applyUpdate(userInfo, NewjambReg, newNinNumber)
        alert('User update successful')
    }else{
        alert('invalid user info')
    }
})