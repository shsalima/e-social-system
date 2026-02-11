const totlCotisation = document.getElementById("total-cotisation");
const topEmplyr = document.getElementById("top-employeur");
const salaireMoyen = document.getElementById("salire-moyen");

let employees = JSON.parse(localStorage.getItem("employees")) || [];
let employers = JSON.parse(localStorage.getItem("emloyeurs")) || [];

// had function dyal cotisations total
let totalCot = 0;
function TotaleCotisations() {
    totalCot = employees.reduce((prev, cur) => prev + +cur.salary, 0);
    totlCotisation.innerText = `${totalCot} $`;
}
TotaleCotisations();

// had function dyal top employeur
let topEmplyeur = "";
let maxSalaire = 0;
function topEmployeur() {
    if (employers.length === 0) {
        topEmplyr.innerText = "Aucun employeur";
        return;
    }
    let employeursTable = [];
    employers.forEach((employeur) => {
        let employeesTable = [];
        employees.forEach((employe) => {
            if (employeur.employees.includes(employe.id)) {
                employeesTable.push(employe);
            }
        });
        employeursTable.push({
            employeurNom: employeur.raison_socail,
            employees: employeesTable,
        });
    });

    // comparaison

    employeursTable.forEach((emp) => {
        let totalSalaire = 0;
        emp.employees.forEach((emplo) => (totalSalaire += +emplo.salary));
        if (totalSalaire > maxSalaire) {
            maxSalaire = totalSalaire;
            topEmplyeur = emp.employeurNom;
        }
    });
    topEmplyr.innerText = topEmplyeur;
}
topEmployeur();

//hadi function dyal salaire Moyen
let salrMyn = 0;
function salaireMoyenTotal() {
    if (!employees || employees.length === 0) {
        salaireMoyen.innerText = "0 $";
        return;
    }

    let total = employees.reduce((sum, emp) => sum + +emp.salary, 0);
    salrMyn = total / employees.length;

    salaireMoyen.innerText = `${salrMyn.toFixed(2)} $`;
}
salaireMoyenTotal();

// had function dyal chart
let spaceCot = document.querySelector(".val-cotisation");
let spaceTopEmp = document.querySelector(".val-top");
let spaceSalaiMoy = document.querySelector(".val-moyen");
let spaceTotal = document.querySelector(".percent");
let chart = document.querySelector(".circle-chart");
function updateCart() {
    let resultTotal = totalCot + maxSalaire + salrMyn;

    if (resultTotal == 0) return;

    let cotPer = ((totalCot / resultTotal) * 100).toFixed(2);
    let topEmpPer = ((maxSalaire / resultTotal) * 100).toFixed(2);
    let salPer = ((salrMyn / resultTotal) * 100).toFixed(2);
    // 3la fikra toFixed katrd haja string
    chart.style.backgroundImage = `conic-gradient(
    #facc15 0% ${cotPer}%,
    #3b82f6 ${cotPer}% ${+cotPer + +topEmpPer}%,
    #10b981 ${+cotPer + +topEmpPer}%  100%
)`;
    spaceCot.innerText = `${cotPer}%`;
    spaceTopEmp.innerText = `${topEmpPer}%`;
    spaceSalaiMoy.innerText = `${salPer}%`;
    spaceTotal.innerText = "100%";
}
updateCart();
