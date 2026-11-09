
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

let btn3 = document.createElement("button")
btn3.textContent = "ADD";
container.appendChild(btn3);
btn3.style.display = "none";

 let form = document.createElement("form")

    let inputID= document.createElement("input")
    inputID.type = "number"
    inputID.placeholder = "Enter ID"
    form.appendChild(inputID) 


    let inputFirstName = document.createElement("input")
    inputFirstName.type = "text"
    inputFirstName.placeholder = "Enter First Name"
    form.appendChild(inputFirstName)
    
    let inputLastName = document.createElement("input")
    inputLastName.type = "text"
    inputLastName.placeholder = "Enter Last Name"
    form.appendChild(inputLastName)

    let inputMark= document.createElement("input")
    inputMark.type = "number"
    inputMark.placeholder = "Enter Mark"
    form.appendChild(inputMark)

    let inputFavSubj = document.createElement("input")
    inputFavSubj.type = "text"
    inputFavSubj.placeholder = "Enter favourite Subj"
    form.appendChild(inputFavSubj)

    let popup = document.createElement("dialog")
    container.appendChild(popup)


    popup.appendChild(form)

btn1.addEventListener('click', function(){
    table1.style.display = 'none'
    table.style.display = 'table'
    
    btn3.style.display = 'inline-block';
    btn5.style.display = 'none';

   
    

    })
btn3.addEventListener('click', function(){
      popup.showModal();
      btn5.style.display = 'none';
})

     
let btn4 = document.createElement("button")
    btn4.type = "submit"
    btn4.textContent = "submit"
    form.appendChild(btn4)

    form.addEventListener('submit', function(event){
    event.preventDefault();
      let ID1 = inputID.value
      let tr26 = document.createElement("tr")
      let tdID = document.createElement("TD")
      tdID.textContent = ID1
      tr26.appendChild(tdID)

 
      let firstName = inputFirstName.value
      let tdFirstName = document.createElement("TD")
      tdFirstName.textContent = firstName 
      tr26.appendChild(tdFirstName)
    

      let LastName = inputLastName.value
    
      let tdLastName = document.createElement("TD")
      tdLastName.textContent = LastName
      tr26.appendChild(tdLastName)
     

      let Mark1 = inputMark.value
      
      let tdMark = document.createElement("TD")
      tdMark.textContent = Mark1
      tr26.appendChild(tdMark)
  


      let favsubj1 = inputFavSubj.value
      
      let tdfavsubj = document.createElement("TD")
      tdfavsubj.textContent = favsubj1
      tr26.appendChild(tdfavsubj)
      
      tbody.appendChild(tr26)

    popup.close()
      form.reset()

    })



let btn5 = document.createElement("button")
    btn5.textContent = "ADD"
    container1.appendChild(btn5)
    btn5.style.display = 'none';



   let form1 = document.createElement("form")

    let inputID1= document.createElement("input")
    inputID1.type = "number"
    inputID1.placeholder = "Enter ID"
    form1.appendChild(inputID1) 


    let inputFirstName1 = document.createElement("input")
    inputFirstName1.type = "text"
    inputFirstName1.placeholder = "Enter First Name"
    form1.appendChild(inputFirstName1)
    
    let inputLastName1 = document.createElement("input")
    inputLastName1.type = "text"
    inputLastName1.placeholder = "Enter Last Name"
    form1.appendChild(inputLastName1)

    let inputHours1= document.createElement("input")
    inputHours1.type = "number"
    inputHours1.placeholder = "Enter Hours"
    form1.appendChild(inputHours1)

    let inputSubj1 = document.createElement("input")
    inputSubj1.type = "text"
    inputSubj1.placeholder = "Enter Subj"
    form1.appendChild(inputSubj1)

    let popup1 = document.createElement("dialog")
    container1.appendChild(popup1)


    popup1.appendChild(form1)

btn2.addEventListener('click', function(){
    table.style.display = 'none'
    table1.style.display = 'table'
    
    btn5.style.display = 'inline-block';
    btn3.style.display = 'none';

    
    
})
btn5.addEventListener('click', function(){
      popup1.showModal();


    })
     
let btn6 = document.createElement("button")
    btn6.type = "submit"
    btn6.textContent = "submit"
    form1.appendChild(btn6)

    form1.addEventListener('submit', function(event){
    event.preventDefault();
      let ID1 = inputID1.value
      let tr30 = document.createElement("tr")
      let tdID = document.createElement("TD")
      tdID.textContent = ID1
      tr30.appendChild(tdID)

 
      let firstName = inputFirstName1.value
      let tdFirstName = document.createElement("TD")
      tdFirstName.textContent = firstName 
      tr30.appendChild(tdFirstName)
    

      let LastName = inputLastName1.value
    
      let tdLastName = document.createElement("TD")
      tdLastName.textContent = LastName
      tr30.appendChild(tdLastName)
     

      let hours = inputHours1.value
      
      let tdHours = document.createElement("TD")
      tdHours.textContent = hours
      tr30.appendChild(tdHours)
  


      let favsubj1 = inputSubj1.value
      let tdsubj = document.createElement("TD")
      tdsubj.textContent = favsubj1
      tr30.appendChild(tdsubj)
      
      tbody1.appendChild(tr30)

    popup1.close()
      form1.reset()

    })












