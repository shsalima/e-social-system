const addBtn = document.querySelector('.add-btn');
const overlay = document.querySelector('.overlay');
const formModal = document.querySelector('.form-container');

//
const openForm = function(){
    overlay.classList.remove('hidden');
    formModal.classList.remove('hidden');
}
const closeForm = function(){
    overlay.classList.add('hidden');
    formModal.classList.add('hidden');
}
addBtn.addEventListener('click', openForm)
overlay.addEventListener('click',closeForm)
