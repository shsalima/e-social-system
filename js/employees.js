const modal = document.querySelector(".form-card");
const overlay = document.querySelector(".overlay");
const addBtn = document.querySelector(".button");
const Bottun_add = document.querySelector(".button-add");
const table_body = document.querySelector(".table_body");

let arry = [];

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
let select_employer = document.getElementById("employer").value;

    const obj_employees = {
        id: arry.length + 1,
        first_name,
        last_name,
        salary,
        select_employer,
    };

    arry.push(obj_employees);

    RemplirTableux();

    overlay.classList.add("hidden");
    modal.classList.add("hidden");
});

function RemplirTableux() {
    table_body.innerHTML = "";

    arry.forEach((emp) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.first_name}</td>
            <td>${emp.last_name}</td>
            <td>${emp.salary}</td>
            <td>${emp.select_employer}</td>
        `;
        table_body.appendChild(tr);
    });
}
