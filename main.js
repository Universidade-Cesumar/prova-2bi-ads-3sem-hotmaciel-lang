// Arquivo para código javascript

const API_URL = "https://6a31cb3a7bc5e1c61266299d.mockapi.io/Materiais";

const inputNome = document.getElementById("input-nome");
const inputQuantidade = document.getElementById("input-quantidade");
const btnCadastrar = document.getElementById("btn-cadastrar");

btnCadastrar.addEventListener("click", async () => {

    const nome = inputNome.value;
    const quantidade = Number(inputQuantidade.value);

    if (!nome || quantidade <= 0) {
        alert("Preencha os campos corretamente!");
        return;
    }

    const material = {
        nome: nome,
        quantidade: quantidade
    };

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(material)
    });

    alert("Material cadastrado!");

    inputNome.value = "";
    inputQuantidade.value = "";

carregarMateriais();
});

const listaMateriais = document.getElementById("lista-materiais");

async function carregarMateriais() {

    const resposta = await fetch(API_URL);
    const materiais = await resposta.json();

    listaMateriais.innerHTML = `
        <tr>
            <th>Nome</th>
            <th>Quantidade</th>
        </tr>
    `;

    materiais.forEach(material => {

        listaMateriais.innerHTML += `
            <tr>
                <td>${material.nome}</td>
                <td>${material.quantidade}</td>
            </tr>
        `;

    });
}

carregarMateriais();