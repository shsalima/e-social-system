const modal = document.querySelector(".form-card");
const overlay = document.querySelector(".overlay");
const addBtn = document.querySelector(".button");
const Bottun_add = document.querySelector(".button-add");
const table_body = document.querySelector(".table_body");
let selectEl = document.getElementById("employer");

let employers = JSON.parse(localStorage.getItem("emloyeurs"));

let employees = JSON.parse(localStorage.getItem("employees")) || [];

// Set Employers in page

for (let employer of employers) {
    selectEl.innerHTML += `
        <option value="${employer.id}">${employer.raison_socail}</option>
    `;
}

RemplirTableux();

addBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
});

Bottun_add.addEventListener("click", function () {
    let first_name = document.getElementById("firstname").value;
    let last_name = document.getElementById("lastname").value;
    let salary = document.getElementById("Salary").value;
    let employerId = selectEl.value;

    if (!first_name || !last_name || !salary || !employerId) return;

    let currentEmployeeId = employees.length + 1;

    // Link current employee to his/her employer
    let employerOfEmployee = employers.find((emp) => emp.id == employerId);
    let employerOfEmployeeIndex = employers.findIndex(
        (emp) => employerOfEmployee == emp,
    );
    employers[employerOfEmployeeIndex].employees.push(currentEmployeeId);
    localStorage.setItem("emloyeurs", JSON.stringify(employers))

    const obj_employees = {
        id: currentEmployeeId,
        first_name,
        last_name,
        salary,
        employerName: employerOfEmployee.raison_socail,
    };

    employees.push(obj_employees);

    localStorage.setItem("employees", JSON.stringify(employees));

    RemplirTableux();

    overlay.classList.add("hidden");
    modal.classList.add("hidden");

    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("Salary").value = "";
    document.getElementById("employer").value = "";
});

function updateSalary(empId, newSalary) {
    let employee = employees.find((e) => e.id === empId);
    if (employee) {
        employee.salary = newSalary;
        localStorage.setItem("employees", JSON.stringify(employees));
        RemplirTableux();
    }
}

function RemplirTableux() {
    table_body.innerHTML = "";

    employees.forEach((emp) => {
        let tr = document.createElement("tr");
        tr.innerHTML = ` 
            <td>${emp.id}</td>
            <td>${emp.first_name}</td>
            <td>${emp.last_name}</td>
            <td>${emp.salary}</td>
            <td>${emp.employerName}</td>
            <td>
                <button class="button-update" onclick="updateSalary(${emp.id}, prompt('Nouveau salaire pour ${emp.first_name} ${emp.last_name}'))">
                     <i class="ri-edit-fill"></i>
                </button>

            </td>
        `;
        table_body.appendChild(tr);
    });
}
