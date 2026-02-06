const modal = document.querySelector(".form-card");
const overlay = document.querySelector(".overlay");
const addBtn = document.querySelector(".button");
const raisonEL = document.querySelector("#raison");
const employerEL = document.querySelector("#employer");
const btn = document.querySelector(".button-add");
const tbady = document.querySelector("tbody");
const form = document.querySelector("form");

let array = JSON.parse(localStorage.getItem("emloyeurs")) || [];

const openModal = () => {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

const closeModal = () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

overlay.addEventListener("click", closeModal);
addBtn.addEventListener("click", openModal);

function addEmployer(e) {
  e.preventDefault();

  if (!raisonEL.value || !employerEL.value) return;

  const employer = {
    id: array.length + 1,
    raison: raisonEL.value,
    employer: employerEL.value,
  };
 
  array.push(employer);

  localStorage.setItem("emloyeurs", JSON.stringify(array));
  
  afichTable();
  form.reset();
  closeModal();
}

btn.addEventListener("click", addEmployer);

function afichTable() {
  tbady.innerHTML = "";

  array.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.raison}</td>
      <td>${item.employer}</td>
    `;
    tbady.appendChild(tr);
  });
}

afichTable();
