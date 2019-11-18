# Qualificação Frontend

Link para versão em Prod: http://capacitacao-estagio-frontend-brianicaro.surge.sh/

## Introdução

Neste teste iremos verificar a habilidade do candidato na resolução de problemas nas tecnologias base empregadas no desenvolvimento frontend.

É esperado que o candidato já tenha conhecimento prévio básico sobre a utilização do HTML, CSS e JavaScript para criação de páginas web interativas.

## Apresentação do Projeto

O projeto deste teste de qualificação consiste em três arquivos: _index.html_, _style.css_ e _main.js_.

O objetivo da aplicação é permitir que uma pessoa efetue uma busca por todos os repositórios de um usuário do **GitHub**. Ao digitar o nome de uma conta de usuário do GitHub no campo de pesquisa e clicar no botão de pesquisa ou pressionar _enter_ é esperado que sejam listados os repositórios do usuário pesquisado.

Alguns nomes de usuário que poderão ser utilizados para testar a funcionalidade: **johnpapa**; **microsoft**.

## Visões

### Pesquisa

O arquivo _images/entrada.png_ demonstra esta tela finalizada.

### Resultado da Pesquisa

O arquivo _images/pesquisa-realizada.png_ demonstra esta tela com uma pesquisa realizada e finalizada.

## Apresentação do Problema

> É recomendado que o candidato solucione os problemas na ordem em que se apresentam.

### main.js

1. O arquivo _main.js_ não foi vinculado ao documento HTML. Você deverá efetuar este vínculo antes de começar.

2. A pesquisa de repositórios não está funcionando! O método _pesquisar_ associado ao evento _submit_ do formulário possui dois erros de sintaxe que precisam ser corrigidos.

3. Quando a busca é realizada, a mensagem **"Carregando..."** continua aparecendo como primeiro elemento da lista de resultados. Isto é um _bug_, a mensagem **"Carregando..."** deverá ser removida da lista de resultados quando a pesquisa for concluída.

### index.html

1. O título do documento poderá apresentar carateres estranhos na palavra **estagiário** bem como todos os outros locais do documento que possuam texto com acentuação. Você deverá indicar o correto charset do arquivo para que isto não ocorra.

2. É esperado que a pesquisa seja realizada ao clicar no botão **"Pesquisar"** e também ao pressionar **enter** no teclado. Nos dois casos o fomulário deverá ser submetido. Há alguma coisa errada nos elementos do **form** porque a pesquisa não está sendo realizada ao pressionar o botão **"Pesquisar"** apesar de funcionar ao pressionar **enter**. Você deverá ajustar isso.

### style.css

> Confira os arquivos na pasta _images_ para ter uma visão de como deverá ficar o layout final da página.

1. O conteúdo do container da página não está centralizado. Ele deverá ser centralizado igual ao apresentado no arquivo "_images/pesquisa-realizada.png_".

2. Os inputs do formulário de pesquisa não estão centralizados. Eles deverão ser centralizados no container.

3. No input para digitação do nome do usuário o texto do _placeholder_ ("_Informe o nome da conta do GitHub_") não está aparecendo por completo. O texto do _placeholder_ deverá aparecer completamente quando o input estiver vazio.

4. O resultado com a lista de repositórios está apresentando uma _decoração_ à esquerda do nome do repositório. A lista não deverá apresentar nenhum tipo de _decoração_.

5. A lista de repositórios está sendo impressa sem uma cor de fundo. Os itens deverão ser impressos com a cor de fundo apresentada na imagem "_images/pesquisa-realizada.png_".
