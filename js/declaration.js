const addBtn = document.querySelector('.add-btn');
const overlay = document.querySelector('.overlay');
const formModal = document.querySelector('.form-container');
const form = document.querySelector('.form');


//------------------- select html inputs --------------------
const selectedOption = document.querySelector('#selectOpt')
const formEl = document.querySelector('.form');
const delayDaysEl = document.querySelector('#delay-days');
const penaltyAmountEl = document.querySelector('#penalty-amount');
const submitBtn = document.querySelector('.submit-btn');
const declarationDateEl = document.querySelector('#dateEl');

// ------------- getting data from local storage ----------------
let saveData = JSON.parse(localStorage.getItem('saveData')) || [];

const employers = [
    { id: 1, companyName: "Tech Solutions Ltd", businessSector: "IT Services" },
    { id: 2, companyName: "Green Farms Inc", businessSector: "Agriculture" },
    { id: 3, companyName: "Urban Builders Co", businessSector: "Construction" },
    { id: 4, companyName: "HealthPlus Clinics", businessSector: "Healthcare" },
    { id: 5, companyName: "EduSmart Academy", businessSector: "Education" }
];

//------------ display data on select --------------
employers.forEach(elm => {
    const option = document.createElement('option');
    option.value = elm.id;
    option.text = `${elm.companyName} (${elm.businessSector})`
    selectedOption.appendChild(option);
});

//-------------- check inputs,push data function ---------------
const checkPushData = function () {
    const delayDays = delayDaysEl.value;
    const declarationDate = declarationDateEl.value;
    const EmployerText = selectedOption.options[selectedOption.selectedIndex].text;
    const allInputs = document.querySelectorAll('.input-box');

    let isValid = true;
    allInputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            input.style.borderColor = '#FA5C5C'
        } else input.style.borderColor = '#ddd'
    });

    if (isValid) {
        console.log("push");
        saveData.push({
            companyName: EmployerText,
            delayDays: delayDays,
            declarationDate: declarationDate,
            penaltyAmount: penaltyAmountEl.value
        });
        closeForm();
    }
    localStorage.setItem('saveData', JSON.stringify(saveData));
    console.log(saveData);
    form.reset();
}

//------------ open, close form functions --------------
const openForm = function () {
    overlay.classList.remove('hidden');
    formModal.classList.remove('hidden');

    delayDaysEl.addEventListener('input', function () {
        const delayDays = delayDaysEl.value;
        if (delayDays) {
            if (delayDays > 0) {
                var penaltyAmountResult = delayDays * 50
                penaltyAmountEl.value = `${penaltyAmountResult} DH`
            }
        }
    })
}
const closeForm = function () {
    overlay.classList.add('hidden');
    formModal.classList.add('hidden');
}

//------------- call function in DOM event ---------------------
formEl.addEventListener('submit', checkPushData);
addBtn.addEventListener('click', openForm);
overlay.addEventListener('click', closeForm);


