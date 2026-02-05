const modal = document.querySelector('.form-card')
const overlay  = document.querySelector('.overlay')
const addBtn  = document.querySelector('.button')

const openModal = function(){
    overlay.classList.remove('hidden')
    modal.classList.remove('hidden')
}
const closeModal = function(){
    overlay.classList.add('hidden')
    modal.classList.add('hidden')
}
overlay.addEventListener('click',closeModal)
addBtn.addEventListener('click',openModal);

