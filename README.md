<img alt="GoStack" src="https://repository-images.githubusercontent.com/346402665/17e19380-840e-11eb-86b6-5475e99b6392" />

<h3 align="center">
  Desafio 03: Ignite Space Traveling Blog
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/denismend/ignite-spacetraveling?color=%2304D361">

  <img alt="Made by denismend" src="https://img.shields.io/badge/made%20by-denismend-%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/stargazers">
    <img alt="sample" src="https://img.shields.io/github/stars/denismend/gostack-fundamentos-reactjs?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction_worker-como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#test_tube-executar-os-testes">Executar os testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img src=".github/sample.gif" alt="sample"/>
</p>

## :rocket: Sobre o desafio

Nesse desafio, você deverá criar uma aplicação para treinar o que aprendeu até agora no ReactJS

Essa será uma aplicação onde o seu principal objetivo é criar um blog do zero. Você vai receber uma aplicação praticamente em branco que deve consumir os dados do Prismic e ter a interface implementada conforme o layout do Figma. Você terá acesso a diversos arquivos para implementar:

- Estilizações global, comun e individuais;
- Importação de fontes Google;
- Paginação de posts;
- Cálculo de tempo estimado de leitura do post;
- Geração de páginas estáticas com os métodos `getStaticProps` e `getStaticPaths`;
- Formatação de datas com `date-fns`;
- Uso de ícones com `react-icons`;
- Requisições HTTP com `fetch`;
- Entre outros.

Você pode conferir todos os detalhes do desafio nos links abaixo, contendo os detalhes da primeira e segunda parte do desafio:

https://www.notion.so/Desafio-01-Criando-um-projeto-do-zero-b1a3645d286b4eec93f5f1f5476d0ff7
https://www.notion.so/Desafio-02-Adicionando-features-ao-blog-d466866c02544c79bbada9717c033d0a

### Template da aplicação

https://www.figma.com/file/0Y26j0tf1K2WB5c1ja5hov/Desafios-M%C3%B3dulo-3-ReactJS/duplicate

## :computer: Tecnologias
Este projeto foi construído utilizando as seguintes tecnologias:

* [Typescript](https://www.typescriptlang.org/)
* [Next.js](https://nextjs.org/)
* [React](https://reactjs.org/)
* [scss](https://sass-lang.com/)
* [date-fns](https://date-fns.org/)
* [prismic CMS](https://prismic.io/)
* [react-icons](https://react-icons.github.io/react-icons/)


## :construction_worker: Como Executar
```bash
# Clone o repositório
  $ git clone https://github.com/denismend/ignite-spacetraveling.git

# No Terminal acesse a raiz do projeto:
  $ cd ignite-spacetraveling
  
# Instale as depêndencias do projeto:
  $ yarn
  ou 
  $ npm install
   
# Certifique-se de criar uma variáveis locais de ambiente env.local com base no arquivo env.sample

# Modo dev
  $ yarn dev
  Veja http://localhost:3000
  
# Modo Prod
  Para executar o projeto no modo de produção do Next.js:
  $yarn build
  $yarn start
  
  Desse modo o Next.js irá gerar o build e execução localmente do 
  projeto criando se pré-configurado no projeto a criação de páginas estáticas
  
  Após executação veja o projeto no seguinte link: http://localhost:3000
```

## :test_tube: Executar os testes
```bash
# Instale as dependências caso já não instalou
# Execute os testes
$ yarn test
ou
$ npm run test
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com 💜 by denismend
