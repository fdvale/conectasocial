# ConectaSocial

Projeto acadêmico de front-end desenvolvido como uma SPA para uma organização social fictícia.

## Arquitetura JavaScript

O JavaScript foi organizado com ES6 Modules para separar responsabilidades:

- `js/script.js`: controle do menu, roteamento da SPA e coordenação da renderização.
- `js/projetos.js`: dados dos projetos e geração dinâmica dos cards.
- `js/formulario.js`: máscaras, validações, eventos e comportamento do formulário.
- `js/storage.js`: persistência dos dados com `localStorage`, `JSON.stringify()` e `JSON.parse()`.

A separação reduz o acoplamento entre as funcionalidades e facilita a manutenção do projeto.
