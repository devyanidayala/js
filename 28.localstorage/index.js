

let students = [
    {
        id:1,
        name:'devyani',
        course:'html'
    },
    {
        id:2,
        name:'mirali',
        course:'css'
    },
    {
        id:3,
        name:'hetvi',
        course:'js'
    }
]

localStorage.setItem('user',JSON.stringify(students))

const getrecord = () =>{
    let all = JSON.parse(localStorage.getItem('students'))

    let tbl = '';
    students.map((val)=>{
        tbl +=`
        <tr>
            <td>${val.id}</td>
            <td>${val.name}</td>
            <td>${val.course}</td>
        </tr>`
    })
    document.getElementById('userrecord').innerHTML = ybl;
}
getrecord();









// const saveRecord = () => {
//     let name = document.getElementById('name').value;
//     let course = document.getElementById('course').value;
    
//     let obj = {
//         id : Math.floor(Math.random()*100000),
//         name : name,
//         course : course
//     }

//     students.push(obj)
//     alert("Record add");
//     getRecord();
    
// }