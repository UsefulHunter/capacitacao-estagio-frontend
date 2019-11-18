'use strict';

var ulElement = document.querySelector('.repositorios');
var formElement = document.querySelector('.form');

formElement.addEventListener('submit', function pesquisar(event) {
  event.preventDefault();

  var inputElement = document.querySelector('input');
  var user = inputElement.value;
  exibirMensagemCarregando();

  axios
    .get('https://api.github.com/users/' + user + '/repos')
    .then(function(response) {
      removeMensagemCarregando();
      listarRepositorios(response.data);
    })
    .catch(function(error) {
      exibirMensagemErro();
    });
});

function exibirMensagemCarregando() {
  ulElement.innerHTML = '';
  adicionarItemLista('Carregando...');
}
function removeMensagemCarregando() {
  var element = document.querySelector('ul');
  element.removeChild(element.childNodes[0]);
}

function exibirMensagemErro() {
  ulElement.innerHTML = '';
  adicionarItemLista('Falha ao carregar a lista de repositórios!');
}

function listarRepositorios(repositories) {
  if (repositories.length === 0) {
    adicionarItemLista('Nenhum repositório encontrado');
  }

  for (var repo of repositories) {
    adicionarItemLista(repo.name);
  }
}

function adicionarItemLista(texto) {
  var textElement = document.createTextNode(texto);
  var loadingElement = document.createElement('li');
  loadingElement.appendChild(textElement);
  ulElement.appendChild(loadingElement);
}
