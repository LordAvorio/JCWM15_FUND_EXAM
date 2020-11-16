let dataUser = [
    {
        id: 1,
        username: "alee",
        email: "alee@gmail.com",
        role: "admin"
    },
    {
        id: 2,
        username: "jennie",
        email: "jenniebp@gmail.com",
        role: "user"
    },
    {
        id: 3,
        username: "elsa",
        email: "elsa@disney.com",
        role: "user"
    }
]

class User{
    constructor(id, username, email, role){
        this.id = id,
        this.username = username
        this.email = email
        this.role = role
       
    }
}

function showUser(idx){
    let table = document.getElementById("tableData")
    let tbody = table.getElementsByTagName("tbody")[0]

    let tr = ""
    for (let i = 0; i < dataUser.length; i++) {
        if (idx === i) {
            tr += `
            <tr>
                <td></td>
                <td>
                    <input id="editUsername" type="text" value="${dataUser[i].username}">
                </td>
                <td>
                    <input id="editEmail" type="text" value="${dataUser[i].email}">
                </td>
                <td>
                    <select name="" id="editRole" class="form-control" value="${dataUser[i].role}">
                        <option value="user">USER</option>
                        <option value="admin">ADMIN</option>
                    </select>
                </td>
                <td>
                    <button onclick="buttonSave(${i})" class="btn"><i class="fas fa-save"></i></button>
                    <button onclick="buttonCancel()" class="btn"><i class="far fa-times-circle"></i></button>
                </td>
            </tr>            
            `
        } else {
            tr += `
            <tr>
                <td>${i + 1}</td>
                <td>${dataUser[i].username}</td>
                <td>${dataUser[i].email}</td>
                <td>${dataUser[i].role}</td>
                <td>
                    <button onclick="buttonDelete(${i})" class="btn"><i class="fa fa-trash"></i></button>
                    <button onclick="buttonEdit(${i})" class="btn"><i class="far fa-edit"></i></button>
                </td>            
            </tr>
            `
        }
    }
    tbody.innerHTML = tr
}

showUser()

function tambahUser (e) {
    e.preventDefault()

    let fieldUsername = document.getElementById("inputUsername")
    let fieldEmail = document.getElementById("inputEmail")
    let fieldRole = document.getElementById("pilihRole")

    let dataUsername = fieldUsername.value
    let dataEmail = fieldEmail.value
    let dataRole = fieldRole.value

    if(dataUsername === "" || dataEmail === "" || dataRole === ""){
        alert("Inputan tidak boleh kosong")
    }else{
        dataUser.push(new User(
            dataUser.length + 1,
            dataUsername,
            dataEmail,
            dataRole,
        ))

        showUser()

        fieldUsername.value = ""
        fieldEmail.value = ""
        fieldRole.value = ""
    }

}

function buttonDelete(index) {
    dataUser.splice(index, 1)
    showUser()
}

function buttonEdit(index){
    showUser(index)
}

function buttonSave(index) {
    let editUsername = document.getElementById("editUsername").value
    let editEmail = document.getElementById("editEmail").value
    let editRole = document.getElementById("editRole").value
    

    dataUser[index].username = editUsername
    dataUser[index].email = editEmail
    dataUser[index].role = editRole

    showUser()

}

function buttonCancel(){
    showUser()
}