let users = localStorage.getItem('users')? JSON.parse(localStorage.getItem('users')): [];

// Display all users
const getUsers = () => {
    let allusers = localStorage.getItem('users')? JSON.parse(localStorage.getItem('users')): [];

    let data = "";

    allusers.map((val) => {
        data += `
            <tr>
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.course}</td>
                <td>
                    <button onclick="deleteUser(${val.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });

    document.getElementById('usersrecord').innerHTML = data;
};

// Load users when page opens
getUsers();

// Add new user
const saveRecord = () => {
    let name = document.getElementById('name').value.trim();
    let course = document.getElementById('course').value.trim();

    if (name === "" || course === "") {
        alert("Please enter Name and Course");
        return;
    }

    let obj = {
        id: Date.now(),
        name: name,
        course: course
    };

    users = localStorage.getItem('users')? JSON.parse(localStorage.getItem('users')): [];

    users.push(obj);

    localStorage.setItem('users', JSON.stringify(users));

    alert("User Added Successfully");

    getUsers();

    document.getElementById('name').value = "";
    document.getElementById('course').value = "";
};

// Delete user
const deleteUser = (id) => {
    let allusers = localStorage.getItem('users')
        ? JSON.parse(localStorage.getItem('users'))
        : [];

    let deleteRecord = allusers.filter((val) => {
        return val.id !== id;
    });

    localStorage.setItem('users', JSON.stringify(deleteRecord));

    users = deleteRecord;

    alert("User Deleted Successfully");

    getUsers();
};