# ConectaSocial

Projeto acadêmico de front-end desenvolvido como uma SPA (Single Page Application) para uma organização social fictícia. A aplicação apresenta iniciativas sociais, possibilidades de voluntariado e um formulário de cadastro de colaboradores.

## Funcionalidades

- Navegação SPA por hash, sem recarregamento completo da página.
- Menu responsivo com submenu e botão hambúrguer em telas menores.
- Geração dinâmica de cards de projetos com JavaScript.
- Formulário de cadastro com validações nativas do HTML e validação visual pelo DOM.
- Máscaras automáticas para CPF, telefone e CEP.
- Mensagens de erro e estados visuais de sucesso.
- Persistência de dados do cadastro com `localStorage`.
- Recuperação dos dados armazenados ao retornar à página de cadastro.

## Tecnologias utilizadas

- **HTML5**: estrutura semântica, formulários, atributos de validação e acessibilidade.
- **CSS3**: layout responsivo, Grid, Flexbox, media queries, estados visuais e estilização dos componentes.
- **JavaScript ES6+**: manipulação do DOM, eventos, Template Literals, `map()`, módulos ES6, validação e roteamento por hash.
- **Web Storage API**: persistência de dados com `localStorage`.
- **Git e GitHub**: controle de versão, branches, issues, pull requests, tags e publicação do projeto.

## Estrutura do projeto

```text
conectasocial/
├── index.html
├── README.md
├── css/
│   └── style.css
├── html/
│   ├── cadastro.html
│   └── projetos.html
├── imagens/
│   └── banner-conectasocial.png
└── js/
    ├── script.js
    ├── projetos.js
    ├── formulario.js
    └── storage.js
```

O arquivo `index.html` é o ponto de entrada da SPA. O diretório `html/` mantém as páginas desenvolvidas nas etapas anteriores do projeto, enquanto a navegação principal atual é renderizada dinamicamente pelo JavaScript.

## Arquitetura JavaScript

O JavaScript foi organizado com ES6 Modules para separar responsabilidades e reduzir o acoplamento entre as funcionalidades:

- `js/script.js`: controla o menu, o roteamento da SPA e a renderização das páginas.
- `js/projetos.js`: armazena os dados dos projetos e gera os cards dinamicamente com Template Literals e `map()`.
- `js/formulario.js`: concentra máscaras, validações, eventos e comportamento do formulário.
- `js/storage.js`: realiza a persistência e recuperação dos dados com `localStorage`, `JSON.stringify()` e `JSON.parse()`.

O `index.html` carrega o arquivo principal com `type="module"`, permitindo o uso de `import` e `export` entre os módulos.

## Pré-requisitos

Para executar o projeto localmente são necessários:

- Git instalado para clonar o repositório;
- navegador moderno com suporte a ES6 Modules;
- servidor HTTP local.

O VS Code com a extensão Live Server pode ser utilizado para facilitar a execução, mas não é uma dependência obrigatória do projeto.

## Instalação e execução local

Clone o repositório:

```bash
git clone https://github.com/fdvale/conectasocial.git
```

Entre na pasta do projeto:

```bash
cd conectasocial
```

Abra o projeto em um editor de código e execute `index.html` por meio de um servidor local, como o Live Server. O uso de um servidor local é recomendado para que os ES6 Modules sejam carregados corretamente pelo navegador.

## Dependências

O projeto foi desenvolvido com HTML, CSS e JavaScript puro e não utiliza bibliotecas ou frameworks externos. Por isso, não é necessário executar `npm install` ou instalar pacotes para utilizar a aplicação.

## Build

Não existe uma etapa de build obrigatória. Os arquivos HTML, CSS e JavaScript são utilizados diretamente pelo navegador, sem processo de compilação ou empacotamento.

## Testes e validação

Os testes foram realizados manualmente no navegador, incluindo:

- navegação entre as rotas da SPA;
- comportamento do menu responsivo;
- entradas válidas e inválidas no formulário;
- aplicação das máscaras de CPF, telefone e CEP;
- mensagens visuais de erro e sucesso;
- envio, limpeza e recuperação dos dados armazenados;
- verificação do comportamento após navegação entre as rotas.

Durante a validação foram utilizados Console, DevTools e inspeção do DOM para identificar falhas de execução e eventos não registrados. A estrutura HTML também foi analisada com o validador W3C durante o desenvolvimento. O projeto não possui, até o momento, uma suíte automatizada de testes.

## Versionamento e fluxo Git

O projeto utiliza Git e GitHub e adota uma estrutura baseada em GitFlow:

- `main`: versão estável e de lançamento;
- `develop`: desenvolvimento contínuo e integração;
- `feature/modularizacao-javascript`: desenvolvimento isolado de melhorias relacionadas à modularização e documentação.

Para novos registros, é utilizado o padrão Conventional Commits, com mensagens como:

```text
docs: documenta arquitetura modular do JavaScript
```

## Versionamento semântico

As versões seguem a convenção SemVer (`MAJOR.MINOR.PATCH`):

- **MAJOR**: alterações incompatíveis com versões anteriores;
- **MINOR**: novas funcionalidades compatíveis;
- **PATCH**: correções de falhas sem quebra de compatibilidade.

A tag `v1.0.0` representa a primeira versão estável do projeto.

## Gestão no GitHub

O repositório utiliza recursos de acompanhamento e revisão de alterações, como Issues e Pull Requests. A Issue #1 foi criada para acompanhar a documentação da arquitetura modular, e o Pull Request #2 registra a integração dessa documentação da branch `feature/modularizacao-javascript` para `develop`.

## Deploy

O projeto pode ser publicado como site estático por meio do GitHub Pages, utilizando o arquivo `index.html` como ponto de entrada.

## Objetivo acadêmico

Este projeto foi desenvolvido para aplicar, de forma prática, conceitos de HTML semântico, CSS responsivo, manipulação do DOM, eventos, validação de formulários, SPA, persistência local, modularização JavaScript e boas práticas de versionamento com Git e GitHub.
