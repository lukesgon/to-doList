# Task Manager

Este é um gerenciador simples de tarefas feito com JavaScript puro. Ele permite que você crie e gerencie tarefas no seu navegador.

## Funcionalidades

- Adicionar tarefas
- Remover tarefas
- Editar tarefas cadastradas
- Persistência de dados no navegador usando o `localStorage`

## Como usar

### Opção A:
Acesso direto através do deploy do projeto, disponível [Aqui](https://lukesgon.github.io/to-doList/).

### Opção B:

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/task-manager.git
    ```

2. Abra o arquivo `index.html` em seu navegador.
3. Adicione tarefas usando o campo de texto na parte inferior da página.
4. Remova tarefas clicando no botão de exclusão ao lado de cada tarefa.
5. Edite tarefas clicando no botão de "lápis" ao lado de cada tarefas.

## Tecnologias usadas

- JavaScript puro
- HTML
- CSS

## Como funciona o código

O código é dividido em três partes principais:

1. **Criação da classe Task:** A classe `Task` é responsável por gerenciar cada tarefa individualmente. Ela possui um construtor que recebe uma descrição da tarefa e métodos para adicionar e remover tarefas do DOM.

2. **Manipulação do DOM:** O código usa o método `appendChild` para adicionar tarefas ao DOM e o método `removeChild` para remover tarefas do DOM.

3. **Persistência de dados:** O código usa o `localStorage` para salvar e recuperar as tarefas do navegador. Quando a página é carregada, o código verifica se há um array salvo no `localStorage` e o recupera. Quando o array de tarefas é modificado, o código chama a função `atualizaLocalStorage` para salvar as alterações no `localStorage`.

## Observações

- O código usa uma função personalizada `listenChangesinArray` para monitorar as alterações no array de tarefas. Essa função usa o método `apply` para chamar o método original do array e o callback passado. Isso permite que o código salve as alterações no `localStorage` sempre que o array for modificado.
  
- Além disso, o código usa o método `clear` para limpar todas as tarefas do `localStorage` antes de salvar as alterações. Isso garante que o `localStorage` tenha apenas as tarefas atuais e não tarefas antigas.

## Projeto de Estudo

Este projeto foi desenvolvido como parte de um estudo em equipe por Lucas Gonçalves, Rodrigo Carvalho e Wild Barreto. Todos os participantes fazem parte do curso Ada.Tech na trilha de desenvolvimento front-end, financiado pelo programa Vem Ser Tech do iFood.

