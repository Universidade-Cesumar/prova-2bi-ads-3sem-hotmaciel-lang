[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/72Bdl6Wn)

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/72Bdl6Wn)

# 🏥 Sistema de Controle de Almoxarifado

## 🌐 Projeto Online

https://universidade-cesumar.github.io/prova-2bi-ads-3sem-hotmaciel-lang/

---

# 🏥 Sistema de Controle de Almoxarifado

## 📌 Sobre o Projeto

Este projeto foi desenvolvido para modernizar o controle de estoque do almoxarifado de materiais de saúde utilizado nas aulas práticas do curso técnico de Enfermagem do SENAC.

A aplicação permite cadastrar, visualizar, atualizar e excluir materiais, substituindo o controle realizado anteriormente por planilhas.

---

## 🎯 Objetivo

Desenvolver uma aplicação web capaz de controlar a entrada e saída de materiais do almoxarifado do SENAC, utilizando uma API REST para armazenamento dos dados.

---

## ✨ Funcionalidades

### Sprint 1
- Cadastro de materiais
- Listagem de materiais
- Integração com MockAPI utilizando GET e POST

### Sprint 2
- Exclusão de materiais
- Baixa de estoque
- Atualização de estoque utilizando PUT
- Validação para impedir retiradas inválidas

### Sprint 3
- Barra de pesquisa de materiais
- Dashboard com total de itens cadastrados
- Alerta visual para estoque crítico (menos de 10 unidades)
- Tratamento de erros utilizando try/catch
- Publicação do projeto na nuvem

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Fetch API
- Async/Await
- MockAPI.io
- Git
- GitHub

---

## 🌐 API Utilizada

### MockAPI.io

A MockAPI.io foi utilizada como back-end simulado para armazenar os dados dos materiais cadastrados.

### Métodos HTTP Utilizados

#### GET

Utilizado para consultar ou listar materiais cadastrados.

#### POST

Utilizado para cadastrar novos materiais.

#### PUT

Utilizado para atualizar a quantidade de um material após uma baixa de estoque.

#### DELETE

Utilizado para remover materiais cadastrados.

---

## 📚 Documentação Inicial – MockAPI.io

### 📌 O que é a MockAPI.io?

A MockAPI.io é uma plataforma online que permite criar APIs REST de forma rápida e simples, sem a necessidade de desenvolver um servidor próprio.

A ferramenta funciona como um back-end simulado, permitindo armazenar e manipular dados durante o desenvolvimento de aplicações.

---

### 🎯 Para que ela serve?

A MockAPI.io é utilizada para simular um back-end durante o desenvolvimento de aplicações.

Com ela, os desenvolvedores podem:

- Criar registros;
- Consultar informações;
- Atualizar dados;
- Excluir registros.

Tudo isso utilizando solicitações HTTP sem a necessidade de configurar bancos de dados ou servidores.

---

### 🏥 Como ela foi utilizada neste projeto?

Neste projeto, a MockAPI.io foi utilizada para armazenar os dados dos materiais do almoxarifado.

A aplicação realiza operações de cadastro, consulta, atualização e exclusão de materiais através de requisições JavaScript.

---


Sugiro:

````md
## 🚀 Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/Universidade-Cesumar/prova-2bi-ads-3sem-hotmaciel-lang.git

### Autor:
Projeto desenvolvido por Davi Santos Maciel para a disciplina de Front-End ministrada pelo professor Leonardo utilizando metodologia ágil baseada em Sprints.