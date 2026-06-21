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

    function validarRetirada(estoqueAtual, quantidadeRetirada) {

        if (quantidadeRetirada <= 0) {
            return false;
        }

        if (quantidadeRetirada > estoqueAtual) {
            return false;
        }
        return true;
    }

const listaMateriais = document.getElementById("lista-materiais");
const totalItens = document.getElementById("total-itens");
const inputBusca = document.getElementById("input-busca");

async function carregarMateriais() {

    const resposta = await fetch(API_URL);
    const materiais = await resposta.json();
    totalItens.textContent = materiais.length;

    listaMateriais.innerHTML = `
        <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Ações</th>
        </tr>
    `;

    materiais.forEach(material => {

        let classeLinha = "";

        if (material.quantidade < 10) {
            classeLinha = "estoque-critico";
        }

        listaMateriais.innerHTML += `
            <tr class="${classeLinha}">
                <td>${material.nome}</td>
                <td>${material.quantidade}</td>
                <td>
                    <button class="btn-baixar"
                        onclick="baixarMaterial('${material.id}', ${material.quantidade})">
                        Baixar
                    </button>

                    <button class="btn-excluir"
                        onclick="excluirMaterial('${material.id}')">
                        Excluir
                    </button>
                </td>
            </tr>
        `;

    });
}

async function excluirMaterial(id) {

    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    carregarMateriais();
}

async function baixarMaterial(id, estoqueAtual) {

    const quantidadeRetirada = Number(
        document.getElementById("input-retirada").value
    );

    if (!validarRetirada(estoqueAtual, quantidadeRetirada)) {
        alert("Quantidade inválida!");
        return;
    }

    const novoEstoque = estoqueAtual - quantidadeRetirada;

    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            quantidade: novoEstoque
        })
    });

    document.getElementById("input-retirada").value = "";

    carregarMateriais();
}

inputBusca.addEventListener("keyup", () => {

    const termo = inputBusca.value.toLowerCase();

    const linhas = listaMateriais.getElementsByTagName("tr");

    for (let i = 1; i < linhas.length; i++) {

        const texto = linhas[i].textContent.toLowerCase();

        if (texto.includes(termo)) {
            linhas[i].style.display = "";
        } else {
            linhas[i].style.display = "none";
        }
    }
});

carregarMateriais();
