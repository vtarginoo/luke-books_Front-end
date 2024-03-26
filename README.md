# Front-end Google Books

Este projeto é Front-end para gerenciar as leituras de uma pessoa, ou seja, nele você pode pesquisar livros e encontrando os livros que você deseja, pode classifica-los e armazenar e seu Reader Hub (Espaço que você categoriza os livros em Lido, Parei de Ler, Quero Ler e Lendo)\*\*

##Objetivo: Poder fazer um gerenciamento das suas leituras por meio de categorização de livros

As principais tecnologias que serão utilizadas aqui é o:

- [Vite](https://vitejs.dev/guide/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Ant Design](https://ant.design/)
- [Recoil](https://recoiljs.org/)
- [React-router-dom](https://reactrouter.com/en/main)

---

## Instruções de Uso

### Pesquisar Livros

### Pesquisar Livros

1. Ao acessar o aplicativo, você será direcionado para a página principal, que é o Reader Hub, onde você encontrará uma barra de navegação superior.
2. Na barra de navegação superior, clique na opção "Pesquisar Livros".
3. Isso o levará a um campo de pesquisa onde você pode digitar o título, autor ou ISBN do livro que deseja encontrar.
4. Você pode escolher qual tipo de consulta deseja fazer, selecionando a opção correspondente no campo de pesquisa (por título, por autor ou por ISBN).
5. Clique no botão de pesquisa para iniciar a busca.
6. Os resultados da pesquisa serão exibidos abaixo do campo de pesquisa, mostrando os livros correspondentes à sua consulta.

### Adicionar Livros ao Reader Hub

1. Após realizar uma pesquisa e encontrar o livro desejado, clique no botão de adicionar à biblioteca e escolha a categoria do livro.
2. O livro será movido para a categoria selecionada no Reader Hub, onde você poderá visualizá-lo posteriormente.
3. Nesse momento também irá surgir o botão "Delete" onde você pode deletar o livro caso não queira mais na sua biblioteca

### Navegar pelo Reader Hub

1. No Reader Hub, você encontrará quatro categorias: "Lido", "Parei de Ler", "Quero Ler" e "Lendo".
2. Clique na categoria desejada para visualizar os livros que foram adicionados a ela.
3. Você pode navegar entre as diferentes categorias para gerenciar suas leituras de acordo com o status de cada livro.

### Executando Tarefas Avançadas

1. Para realizar tarefas avançadas, como atualizar informações de um livro, excluir um livro do Reader Hub ou realizar outras operações, o usuário precisa acessar o livro que deseja editar e então se quiser mudar a categoria ou até deletar o livro caso não queira mais ter em sua biblioteca.

---

### Instalação

Será necessário fazer o download do [Node.js](https://nodejs.org/en) na sua máquina:

Também é necessário executar o comando no seu terminal:

```
npm install ou npm i
```

---

### Executando o servidor

Para executar o front-end basta digitar no terminal:

```
npm run dev
```

---

### Acesso no browser

Abra o [http://localhost:5173/](http://localhost:5173/]) no navegador para verificar o status da API em execução.

---

## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile e o requirements.txt no terminal.
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t luke-books-front-end .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
$ docker run -p 5173:5173 luke-books-front-end
```

Uma vez executando, para acessar a API, basta abrir o [http://localhost:5173/](http://localhost:5173/) no navegador.

### Alguns comandos úteis do Docker

> **Para verificar se a imagem foi criada** você pode executar o seguinte comando:
>
> ```
> $ docker images
> ```
>
> Caso queira **remover uma imagem**, basta executar o comando:
>
> ```
> $ docker rmi <IMAGE ID>
> ```
>
> Subistituindo o `IMAGE ID` pelo código da imagem
>
> **Para verificar se o container está em exceução** você pode executar o seguinte comando:
>
> ```
> $ docker container ls --all
> ```
>
> Caso queira **parar um container**, basta executar o comando:
>
> ```
> $ docker stop <CONTAINER ID>
> ```
>
> Subistituindo o `CONTAINER ID` pelo ID do container
>
> Caso queira **destruir um container**, basta executar o comando:
>
> ```
> $ docker rm <CONTAINER ID>
> ```
>
> Para mais comandos, veja a [documentação do docker](https://docs.docker.com/engine/reference/run/).
