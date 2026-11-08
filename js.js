
let container = document.body
let table = document.createElement("table")
table.classList.add("simple-table")

container.appendChild(table)

let thead = document.createElement("Thead")

table.appendChild(thead)

let trHead = document.createElement("TR")
thead.appendChild(trHead)

let THID = document.createElement("TH")

THID.textContent = "ID"
trHead.appendChild(THID)

let thFirstName = document.createElement("TH")
thFirstName.textContent = "FirstName"
trHead.appendChild(thFirstName)

let thLastName = document.createElement("TH")
thLastName.textContent = "Last Name"
trHead.appendChild(thLastName)

let thMark = document.createElement("TH")
thMark.textContent = "Mark"
trHead.appendChild(thMark)

let favSubj = document.createElement("TH")
favSubj.textContent = "Favourite Subj"
trHead.appendChild(favSubj)

let tbody = document.createElement("TBODY")
table.appendChild(tbody)

let schoolars = [
    {
        id:1,
        firstName: "Ivan",
        lastName: "Ivanov",
        mark: 12,
        favSubj: "Biology",
    },
    {
        id:2,
        firstName: "Petro",
        lastName: "Petichenko",
        mark: 10,
        favSubj: "Literature",
    },
    {
        id:3,
        firstName: "Vasil",
        lastName: "Lomachenko",
        mark: 8,
        favSubj: "Math",
    },
];

for (let i = 0; i < schoolars.length; i++){
    let tr = document.createElement("TR");

    let tdID = document.createElement("TD")
    tdID.textContent = schoolars[i].id
    tr.appendChild(tdID)

    let tdFirstName = document.createElement("TD")
    tdFirstName.textContent = schoolars[i].firstName
    tr.appendChild(tdFirstName)

    let tdLastName = document.createElement("TD")
    tdLastName.textContent = schoolars[i].lastName
    tr.appendChild(tdLastName)

    let tdMark = document.createElement("TD")
    tdMark.textContent = schoolars[i].mark
    tr.appendChild(tdMark)

    let tdFavSubj = document.createElement("TD")
    tdFavSubj.textContent = schoolars[i].favSubj
    tr.appendChild(tdFavSubj)

    tbody.appendChild(tr)
}

let container1 = document.body
let table1 = document.createElement("table")

container1.appendChild(table1)

let thead1 = document.createElement("Thead")

table1.appendChild(thead1)

let trHead1 = document.createElement("TR")
thead1.appendChild(trHead1)

let THID1 = document.createElement("TH")

THID1.textContent = "ID"
trHead1.appendChild(THID1)

let thFirstName1 = document.createElement("TH")
thFirstName1.textContent = "FirstName"
trHead1.appendChild(thFirstName1)

let thLastName1 = document.createElement("TH")
thLastName1.textContent = "Last Name"
trHead1.appendChild(thLastName1)

let thMark1 = document.createElement("TH")
thMark1.textContent = "Hours"
trHead1.appendChild(thMark1)

let favSubj1 = document.createElement("TH")
favSubj1.textContent = "Subject"
trHead1.appendChild(favSubj1)

let tbody1 = document.createElement("TBODY")
table1.appendChild(tbody1)

let teachers = [
    {
        id:1,
        firstName: "Maria",
        lastName: "Kyrychenko",
        hours: 20,
        subj: "History",
    },
    {
        id:2,
        firstName: "Irakliy",
        lastName: "Iraklenko",
        hours: 18,
        subj: "Physical culture",
    },
    {
        id:3,
        firstName: "Georgiy",
        lastName: "Gorgenko",
        hours: 25,
        subj: "Physics",
    },
];

for (let i = 0; i < teachers.length; i++){
    let tr = document.createElement("TR");

    let tdID = document.createElement("TD")
    tdID.textContent = teachers[i].id
    tr.appendChild(tdID)

    let tdFirstName = document.createElement("TD")
    tdFirstName.textContent = teachers[i].firstName
    tr.appendChild(tdFirstName)

    let tdLastName = document.createElement("TD")
    tdLastName.textContent = teachers[i].lastName
    tr.appendChild(tdLastName)

    let tdMark = document.createElement("TD")
    tdMark.textContent = teachers[i].hours
    tr.appendChild(tdMark)

    let tdSubj = document.createElement("TD")
    tdSubj.textContent = teachers[i].subj
    tr.appendChild(tdSubj)

    tbody1.appendChild(tr)
}

let btn1 = document.createElement("button")
btn1.textContent = "STUDENTS"

let btn2 = document.createElement("button")
btn2.textContent = "TEACHERS"

container.prepend(btn2)
container.prepend(btn1)

table1.style.display = 'none'
table.style.display = 'none'

btn1.addEventListener('click', function(){
    table1.style.display = 'none'
    table.style.display = 'table'
});
btn2.addEventListener('click', function(){
    table.style.display = 'none'
    table1.style.display = 'table'
});