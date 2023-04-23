
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
        updateTable();
        closeModal();

    }
}



document.getElementById('save')
    .addEventListener('click', saveClient)

const noneModal = document.querySelector('#modalClose');
modalClose.addEventListener('click', function () {
    closeModal('modal');
});

const createRow = (client, index) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.telefone}</td>
        <td>${client.cidade}</td>
        <td>
          <button type="button" class="button edit" id="edit-${index}">Editar</button>
          <button type="button" class="button delet" id="delete-${index}">Excluir</button>
        </td>
        `
    document.querySelector('#tableClient>tbody').appendChild(newRow)


}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)
}

const fillFields = (client) => {
    document.getElementById('nome').value = client.nome;
    document.getElementById('email').value = client.email;
    document.getElementById('telefone').value = client.telefone;
    document.getElementById('cidade').value = client.cidade;

}

const editClient = (index) => {
    const client = readClient()[index]
    fillFields(client)
    startModal()
}


const editDelete = (event) => {
    if (event.target.type === 'button') {
        const [action, index] = event.target.id.split('-');

        if (action === 'edit') {
            editClient(index)
        } else {
            console.log('deletando')

        }

    }


}

updateTable()

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete)