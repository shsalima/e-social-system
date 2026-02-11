const addBtn = document.querySelector(".add-btn");
const overlay = document.querySelector(".overlay");
const formModal = document.querySelector(".form-container");
const form = document.querySelector(".form");

//------------------- select html inputs --------------------
const selectedOption = document.querySelector("#selectOpt");
const formEl = document.querySelector(".form");
const delayDaysEl = document.querySelector("#delay-days");
const penaltyAmountEl = document.querySelector("#penalty-amount");
const submitBtn = document.querySelector(".submit-btn");
const declarationDateEl = document.querySelector("#dateEl");

// ------------- getting data from local storage ----------------
let declarations = JSON.parse(localStorage.getItem("declarations")) || [];
let employeurs = JSON.parse(localStorage.getItem("emloyeurs")) || [];

//------------ display data on select --------------
employeurs.forEach((elm) => {
    const option = document.createElement("option");
    option.value = elm.id;
    option.text = `${elm.raison_socail} (${elm.secteur})`;
    selectedOption.appendChild(option);
});

//-------------- check inputs,push data function ---------------
const checkPushData = function (e) {
    e.preventDefault();

    const delayDays = delayDaysEl.value;
    const declarationDate = declarationDateEl.value;
    const EmployerText =
        selectedOption.options[selectedOption.selectedIndex].text;
    const allInputs = document.querySelectorAll(".input-box");

    let isValid = true;
    allInputs.forEach((input) => {
        if (input.value.trim() === "") {
            isValid = false;
            input.style.borderColor = "#FA5C5C";
        } else input.style.borderColor = "#ddd";
    });

    if (isValid) {
        declarations.push({
            id: declarations.length + 1,
            companyName: EmployerText,
            delayDays: delayDays,
            penaltyMonthAndYear: declarationDate,
            penaltyAmount: penaltyAmountEl.value,
        });
        closeForm();
    }
    localStorage.setItem("declarations", JSON.stringify(declarations));
    form.reset();
};

//------------ open, close form functions --------------
const openForm = function () {
    overlay.classList.remove("hidden");
    formModal.classList.remove("hidden");

    delayDaysEl.addEventListener("input", function () {
        const delayDays = delayDaysEl.value;
        if (delayDays) {
            if (delayDays > 0) {
                var penaltyAmountResult = delayDays * 50;
                penaltyAmountEl.value = `${penaltyAmountResult} DH`;
            }
        }
    });
};
const closeForm = function () {
    overlay.classList.add("hidden");
    formModal.classList.add("hidden");
};

//------------- call function in DOM event ---------------------
formEl.addEventListener("submit", checkPushData);
addBtn.addEventListener("click", openForm);
overlay.addEventListener("click", closeForm);
