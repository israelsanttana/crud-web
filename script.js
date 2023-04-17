
function startModal(modal) {
    const getModal = document.getElementById('modal');
    getModal.classList.add('active');
}

function closeModal(modal) {
    const getModal = document.getElementById('modal');
    getModal.classList.remove('active');
}

const openModal = document.querySelector('#client');
client.addEventListener('click', function () {
    startModal('modal');
});

const noneModal = document.querySelector('#modalClose');
modalClose.addEventListener('click', function () {
    closeModal('modal');
});

const tempClient = {
    nome: 'Israel',
    email: 'israelsantana@gmail.com',
    celular: '(41) 98904-2299',
    cidade: 'Curitiba'

}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient));

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient)


}




