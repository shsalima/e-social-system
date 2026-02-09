const addBtn = document.querySelector('.add-btn');
const overlay = document.querySelector('.overlay');
const formModal = document.querySelector('.form-container');

const selectedOption = document.querySelector('#selectOpt')

// ------------- Data ----------------

const employers = [
    { id: 1, companyName: "Tech Solutions Ltd", businessSector: "IT Services" },
    { id: 2, companyName: "Green Farms Inc", businessSector: "Agriculture" },
    { id: 3, companyName: "Urban Builders Co", businessSector: "Construction" },
    { id: 4, companyName: "HealthPlus Clinics", businessSector: "Healthcare" },
    { id: 5, companyName: "EduSmart Academy", businessSector: "Education" }
];


employers.forEach(elm => {
    const option = document.createElement('option');
    option.value = elm.id;
    option.text = `${elm.companyName} (${elm.businessSector})`
    selectedOption.appendChild(option);
});


//------------------- select html inputs --------------------
const formEl = document.querySelector('.form');
const delayDaysEl = document.querySelector('#delay-days');
const penaltyAmountEl = document.querySelector('#penalty-amount');
const submitBtn = document.querySelector('.submit-btn');
const declarationDateEl = document.querySelector('#dateEl');

console.log(selectedOption.value);
//----------------------\
formEl.addEventListener('submit', function () {
    const delayDays = delayDaysEl.value;
    const Employers = selectedOption.value
    const declarationDate = declarationDateEl.value
    const EmployerText = selectedOption.options[selectedOption.selectedIndex].text

    closeForm();
})

//------------ open, close form --------------
const openForm = function () {
    overlay.classList.remove('hidden');
    formModal.classList.remove('hidden');

    delayDaysEl.addEventListener('input', function () {
        const delayDays = delayDaysEl.value;
        if (delayDays) {
            if (delayDays > 0) {
                let penaltyAmount = delayDays * 50
                penaltyAmountEl.value = `${penaltyAmount} DH`
            }
        }
    })
}
const closeForm = function () {
    overlay.classList.add('hidden');
    formModal.classList.add('hidden');
}
addBtn.addEventListener('click', openForm)
overlay.addEventListener('click', closeForm)
