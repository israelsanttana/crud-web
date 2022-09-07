function startModal(modal){
    const getModal = document.getElementById('modal');
    getModal.classList.add('active');
}

function closeModal(modal){
    const getModal = document.getElementById('modal');
    getModal.classList.remove('active');
}

const openModal = document.querySelector('#client');
client.addEventListener('click', function(){
    startModal('modal');
});

const noneModal = document.querySelector('#modalClose');
modalClose.addEventListener('click', function(){
    closeModal('modal');
})




