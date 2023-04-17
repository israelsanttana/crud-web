
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
    nome: 'Nicolas',
    email: 'israelsantana@gmail.com',
    celular: '(41) 98904-2299',
    cidade: 'Curitiba'
}


const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient));

const deleteClient = (index) => {
    const dbClient = readClient();
    dbClient.splice(index, 1);
    setLocalStorage(dbClient);
}

const updateClient = (index, client) => {
    const dbClient = readClient();
    dbClient[index] = client;
    setLocalStorage(dbClient);
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient)
}

const isValidField = () => {
    return document.getElementById('form').reportValidity();

}

const saveClient = () => {
    if (isValidField()) {
        console.log('cadastrando client')
    }
}



document.getElementById('save')
    .addEventListener('click', saveClient)




