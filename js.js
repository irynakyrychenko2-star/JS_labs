
let container = document.body;



let studentsTable = document.createElement("table");
studentsTable.classList.add("simple-table");

container.appendChild(studentsTable);

let studentsTableHead = document.createElement("thead");
studentsTable.appendChild(studentsTableHead);

let studentsHeaderRow = document.createElement("tr");
studentsTableHead.appendChild(studentsHeaderRow);

let studentIdHeader = document.createElement("th");
studentIdHeader.textContent = "ID";
studentsHeaderRow.appendChild(studentIdHeader);

let studentFirstNameHeader = document.createElement("th");
studentFirstNameHeader.textContent = "FirstName";
studentsHeaderRow.appendChild(studentFirstNameHeader);

let studentLastNameHeader = document.createElement("th");
studentLastNameHeader.textContent = "Last Name";
studentsHeaderRow.appendChild(studentLastNameHeader);

let studentMarkHeader = document.createElement("th");
studentMarkHeader.textContent = "Mark";
studentsHeaderRow.appendChild(studentMarkHeader);

let studentSubjectHeader = document.createElement("th");
studentSubjectHeader.textContent = "Favourite Subj";
studentsHeaderRow.appendChild(studentSubjectHeader);

let studentActionsHeader = document.createElement("th");
studentActionsHeader.textContent = "Actions";
studentsHeaderRow.appendChild(studentActionsHeader);

let studentsTableBody = document.createElement("tbody");
studentsTable.appendChild(studentsTableBody);

let students = [
    {
        id: 1,
        firstName: "Ivan",
        lastName: "Ivanov",
        mark: 12,
        favoriteSubject: "Biology",
    },
    {
        id: 2,
        firstName: "Petro",
        lastName: "Petichenko",
        mark: 10,
        favoriteSubject: "Literature",
    },
    {
        id: 3,
        firstName: "Vasil",
        lastName: "Lomachenko",
        mark: 8,
        favoriteSubject: "Math",
    },
];

for (let index = 0; index < students.length; index++) {
    let studentRow = document.createElement("tr");

    let studentIdCell = document.createElement("td");
    studentIdCell.textContent = students[index].id;
    studentRow.appendChild(studentIdCell);

    let studentFirstNameCell = document.createElement("td");
    studentFirstNameCell.textContent = students[index].firstName;
    studentRow.appendChild(studentFirstNameCell);

    let studentLastNameCell = document.createElement("td");
    studentLastNameCell.textContent = students[index].lastName;
    studentRow.appendChild(studentLastNameCell);

    let studentMarkCell = document.createElement("td");
    studentMarkCell.textContent = students[index].mark;
    studentRow.appendChild(studentMarkCell);

    let studentSubjectCell = document.createElement("td");
    studentSubjectCell.textContent = students[index].favoriteSubject;
    studentRow.appendChild(studentSubjectCell);

    let studentActionCell = document.createElement("td");
    studentActionCell.textContent = "X";
    studentActionCell.classList.add("action-cell");
    studentRow.appendChild(studentActionCell);

    studentsTableBody.appendChild(studentRow);
}

// TEACHERS TABLE

let teachersTable = document.createElement("table");
teachersTable.classList.add("simple-table");

container.appendChild(teachersTable);

let teachersTableHead = document.createElement("thead");
teachersTable.appendChild(teachersTableHead);

let teachersHeaderRow = document.createElement("tr");
teachersTableHead.appendChild(teachersHeaderRow);

let teacherIdHeader = document.createElement("th");
teacherIdHeader.textContent = "ID";
teachersHeaderRow.appendChild(teacherIdHeader);

let teacherFirstNameHeader = document.createElement("th");
teacherFirstNameHeader.textContent = "FirstName";
teachersHeaderRow.appendChild(teacherFirstNameHeader);

let teacherLastNameHeader = document.createElement("th");
teacherLastNameHeader.textContent = "Last Name";
teachersHeaderRow.appendChild(teacherLastNameHeader);

let teacherHoursHeader = document.createElement("th");
teacherHoursHeader.textContent = "Hours";
teachersHeaderRow.appendChild(teacherHoursHeader);

let teacherSubjectHeader = document.createElement("th");
teacherSubjectHeader.textContent = "Subject";
teachersHeaderRow.appendChild(teacherSubjectHeader);

let teacherActionsHeader = document.createElement("th");
teacherActionsHeader.textContent = "Actions";
teachersHeaderRow.appendChild(teacherActionsHeader);

let teachersTableBody = document.createElement("tbody");
teachersTable.appendChild(teachersTableBody);

let teachers = [
    {
        id: 1,
        firstName: "Maria",
        lastName: "Kyrychenko",
        hours: 20,
        subject: "History",
    },
    {
        id: 2,
        firstName: "Irakliy",
        lastName: "Iraklenko",
        hours: 18,
        subject: "Physical culture",
    },
    {
        id: 3,
        firstName: "Georgiy",
        lastName: "Gorgenko",
        hours: 25,
        subject: "Physics",
    },
];

for (let index = 0; index < teachers.length; index++) {
    let teacherRow = document.createElement("tr");

    let teacherIdCell = document.createElement("td");
    teacherIdCell.textContent = teachers[index].id;
    teacherRow.appendChild(teacherIdCell);

    let teacherFirstNameCell = document.createElement("td");
    teacherFirstNameCell.textContent = teachers[index].firstName;
    teacherRow.appendChild(teacherFirstNameCell);

    let teacherLastNameCell = document.createElement("td");
    teacherLastNameCell.textContent = teachers[index].lastName;
    teacherRow.appendChild(teacherLastNameCell);

    let teacherHoursCell = document.createElement("td");
    teacherHoursCell.textContent = teachers[index].hours;
    teacherRow.appendChild(teacherHoursCell);

    let teacherSubjectCell = document.createElement("td");
    teacherSubjectCell.textContent = teachers[index].subject;
    teacherRow.appendChild(teacherSubjectCell);

    let teacherActionCell = document.createElement("td");
    teacherActionCell.textContent = "X";
    teacherActionCell.classList.add("action-cell");
    teacherRow.appendChild(teacherActionCell);

    teachersTableBody.appendChild(teacherRow);
}



function enableEditing(tableBody) {

    tableBody.addEventListener("click", function(event) {

        let tableCell = event.target.closest("td");

        if (!tableCell || !tableBody.contains(tableCell)) {
            return;
        }

        if (tableCell.classList.contains("action-cell")) {
            let tableRow = tableCell.parentElement;
            tableRow.remove();
            return;
        }

        if (tableCell.querySelector("input")) {
            return;
        }

        let editInput = document.createElement("input");
        let originalValue = tableCell.textContent;

        editInput.value = originalValue;

        tableCell.textContent = "";
        tableCell.appendChild(editInput);
        editInput.focus();

        function saveChanges() {
            tableCell.textContent = editInput.value;
        }

        editInput.addEventListener("blur", saveChanges);

        editInput.addEventListener("keydown", function(event) {

            if (event.key === "Enter") {
                editInput.blur();
            }

            if (event.key === "Escape") {
                editInput.removeEventListener("blur", saveChanges);
                tableCell.textContent = originalValue;
            }
        });

    });
}

enableEditing(studentsTableBody);
enableEditing(teachersTableBody);


let studentsTabButton = document.createElement("button");
studentsTabButton.textContent = "STUDENTS";

let teachersTabButton = document.createElement("button");
teachersTabButton.textContent = "TEACHERS";

container.prepend(teachersTabButton);
container.prepend(studentsTabButton);


let addStudentButton = document.createElement("button");
addStudentButton.textContent = "ADD";

container.appendChild(addStudentButton);

let studentForm = document.createElement("form");

let studentIdInput = document.createElement("input");
studentIdInput.type = "number";
studentIdInput.placeholder = "Enter ID";
studentIdInput.required = true;
studentForm.appendChild(studentIdInput);

let studentFirstNameInput = document.createElement("input");
studentFirstNameInput.type = "text";
studentFirstNameInput.placeholder = "Enter First Name";
studentFirstNameInput.required = true;
studentForm.appendChild(studentFirstNameInput);

let studentLastNameInput = document.createElement("input");
studentLastNameInput.type = "text";
studentLastNameInput.placeholder = "Enter Last Name";
studentLastNameInput.required = true;
studentForm.appendChild(studentLastNameInput);

let studentMarkInput = document.createElement("input");
studentMarkInput.type = "number";
studentMarkInput.placeholder = "Enter Mark";
studentMarkInput.required = true;
studentForm.appendChild(studentMarkInput);

let studentSubjectInput = document.createElement("input");
studentSubjectInput.type = "text";
studentSubjectInput.placeholder = "Enter Favourite Subject";
studentSubjectInput.required = true;
studentForm.appendChild(studentSubjectInput);

let studentDialog = document.createElement("dialog");
container.appendChild(studentDialog);

studentDialog.appendChild(studentForm);

let studentSubmitButton = document.createElement("button");
studentSubmitButton.type = "submit";
studentSubmitButton.textContent = "Submit";
studentForm.appendChild(studentSubmitButton);

addStudentButton.addEventListener("click", function() {
    studentDialog.showModal();
});

studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let studentRow = document.createElement("tr");

    let studentIdCell = document.createElement("td");
    studentIdCell.textContent = studentIdInput.value;
    studentRow.appendChild(studentIdCell);

    let studentFirstNameCell = document.createElement("td");
    studentFirstNameCell.textContent = studentFirstNameInput.value;
    studentRow.appendChild(studentFirstNameCell);

    let studentLastNameCell = document.createElement("td");
    studentLastNameCell.textContent = studentLastNameInput.value;
    studentRow.appendChild(studentLastNameCell);

    let studentMarkCell = document.createElement("td");
    studentMarkCell.textContent = studentMarkInput.value;
    studentRow.appendChild(studentMarkCell);

    let studentSubjectCell = document.createElement("td");
    studentSubjectCell.textContent = studentSubjectInput.value;
    studentRow.appendChild(studentSubjectCell);

    let studentActionCell = document.createElement("td");
    studentActionCell.textContent = "X";
    studentActionCell.classList.add("action-cell");
    studentRow.appendChild(studentActionCell);

    studentsTableBody.appendChild(studentRow);

    studentDialog.close();
    studentForm.reset();
});



let addTeacherButton = document.createElement("button");
addTeacherButton.textContent = "ADD";

container.appendChild(addTeacherButton);

let teacherForm = document.createElement("form");

let teacherIdInput = document.createElement("input");
teacherIdInput.type = "number";
teacherIdInput.placeholder = "Enter ID";
teacherIdInput.required = true;
teacherForm.appendChild(teacherIdInput);

let teacherFirstNameInput = document.createElement("input");
teacherFirstNameInput.type = "text";
teacherFirstNameInput.placeholder = "Enter First Name";
teacherFirstNameInput.required = true;
teacherForm.appendChild(teacherFirstNameInput);

let teacherLastNameInput = document.createElement("input");
teacherLastNameInput.type = "text";
teacherLastNameInput.placeholder = "Enter Last Name";
teacherLastNameInput.required = true;
teacherForm.appendChild(teacherLastNameInput);

let teacherHoursInput = document.createElement("input");
teacherHoursInput.type = "number";
teacherHoursInput.placeholder = "Enter Hours";
teacherHoursInput.required = true;
teacherForm.appendChild(teacherHoursInput);

let teacherSubjectInput = document.createElement("input");
teacherSubjectInput.type = "text";
teacherSubjectInput.placeholder = "Enter Subject";
teacherSubjectInput.required = true;
teacherForm.appendChild(teacherSubjectInput);

let teacherDialog = document.createElement("dialog");
container.appendChild(teacherDialog);

teacherDialog.appendChild(teacherForm);

let teacherSubmitButton = document.createElement("button");
teacherSubmitButton.type = "submit";
teacherSubmitButton.textContent = "Submit";
teacherForm.appendChild(teacherSubmitButton);

addTeacherButton.addEventListener("click", function() {
    teacherDialog.showModal();
});

teacherForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let teacherRow = document.createElement("tr");

    let teacherIdCell = document.createElement("td");
    teacherIdCell.textContent = teacherIdInput.value;
    teacherRow.appendChild(teacherIdCell);

    let teacherFirstNameCell = document.createElement("td");
    teacherFirstNameCell.textContent = teacherFirstNameInput.value;
    teacherRow.appendChild(teacherFirstNameCell);

    let teacherLastNameCell = document.createElement("td");
    teacherLastNameCell.textContent = teacherLastNameInput.value;
    teacherRow.appendChild(teacherLastNameCell);

    let teacherHoursCell = document.createElement("td");
    teacherHoursCell.textContent = teacherHoursInput.value;
    teacherRow.appendChild(teacherHoursCell);

    let teacherSubjectCell = document.createElement("td");
    teacherSubjectCell.textContent = teacherSubjectInput.value;
    teacherRow.appendChild(teacherSubjectCell);

    let teacherActionCell = document.createElement("td");
    teacherActionCell.textContent = "X";
    teacherActionCell.classList.add("action-cell");
    teacherRow.appendChild(teacherActionCell);

    teachersTableBody.appendChild(teacherRow);

    teacherDialog.close();
    teacherForm.reset();
});

studentsTable.classList.remove("hidden");
teachersTable.classList.add("hidden");

addStudentButton.classList.remove("hidden");
addTeacherButton.classList.add("hidden");



studentsTabButton.addEventListener("click", function() {

    studentsTable.classList.remove("hidden");
    teachersTable.classList.add("hidden");

    addStudentButton.classList.remove("hidden");
    addTeacherButton.classList.add("hidden");

});



teachersTabButton.addEventListener("click", function() {

    studentsTable.classList.add("hidden");
    teachersTable.classList.remove("hidden");

    addStudentButton.classList.add("hidden");
    addTeacherButton.classList.remove("hidden");

});
