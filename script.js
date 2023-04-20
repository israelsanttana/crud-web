
function startModal(modal) {
    const getModal = document.getElementById('modal');
    getModal.classList.add('active');
}

function closeModal(modal) {
    const getModal = document.getElementById('modal');
    getModal.classList.remove('active');
    clearFields();
}

const openModal = document.querySelector('#client');
client.addEventListener('click', function () {
    startModal('modal');
});

const noneModal = document.querySelector('#modalClose');
modalClose.addEventListener('click', function () {
    closeModal('modal');
});

const updateTable = () => {
    const dbClient = readClient()
    dbClient.forEach(createRow)
}

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

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field');
    fields.forEach(field => field.value = "");
}

const saveClient = () => {
    if (isValidField()) {
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            cidade: document.getElementById('cidade').value
        }
        createClient(client);
        closeModal();

    }
}



document.getElementById('save')
    .addEventListener('click', saveClient)




