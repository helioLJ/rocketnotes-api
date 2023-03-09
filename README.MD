
# RocketNotes API 📝

**API** criada no Curso Rocketseat Explorer, em *desenvolvimento*, de Criação de Notas.

## Stack utilizada ⚛️
**Back-end:** Node.JS, Express, Knex.js
![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

**Banco de Dados:** SQLite
![sqlite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

## Funcionalidades ⚙️
- Criar **Usuário** com *Nome*, *Email* e *Senha*.
    - *Email* não pode ser igual à um existente.
- Atualizar *Nome*, *Email* e *Senha*.
    - *Senha Antiga* não pode estar incorreta.
    - *Email* não pode ser mudado para um existente.
- Criar **Nota** com *Título*, *Descrição*, *Tags* e *Links*
- Listar todas as **Notas** existentes.
    - Podendo pesquisar pelo *Título*
    - Podendo filtrar pelas *Tags*
- Mostrar **Nota** específica.
- Deletar **Nota** específica.
- Mostrar **Tag** específica.


## Estrutura do Projeto
![imgur](https://i.imgur.com/KbzzU47.png)


## Estrutura do Banco de Dados
![imgur](https://i.imgur.com/TqHIh5A.png)


## Link 💻
- [Deploy (Em breve...) 🌐 ]()


## Aprendizados 📖

- [API](https://i.imgur.com/EKqM0KB.png)
- [Node.js](https://i.imgur.com/v4amnA8.png), [JS Runtime Enviroment](https://i.imgur.com/f4mfZs8.png) e [v8 Engine](https://i.imgur.com/H2SUwdY.png)
    - [Para quê serve?](https://i.imgur.com/5CleC2R.png)
    - [Onde pode ser utilizado?](https://i.imgur.com/Njdez9w.png)
    - [Vantagens](https://i.imgur.com/z4bHgl7.png)
- [Event Loop, Singles Thread & Non-blocking I/O](https://i.imgur.com/SoHZl27.png)
- [Rotas](https://i.imgur.com/VuZvgUi.png) e [Métodos HTTP](https://i.imgur.com/veErrBc.png)
    - **GET** - (Leitura)
    - **POST** - (Criação)
    - **PUT** - (Atualização)
    - **DELETE** - (Deleção)
    - **PATCH** - (Atualização Parcial)
- Iniciar um projeto NodeJs, instalar e utilizar o [Express](https://www.npmjs.com/package/express)
- [Route Params](https://i.imgur.com/JrX9rl8.png) (request.params)
- [Query Params](https://i.imgur.com/q5m88Og.png) (request.query)
- Body Params (request.body)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Insomnia](https://i.imgur.com/WLd4deU.png)
- Organização de [Estrutura do Projeto](https://i.imgur.com/KbzzU47.png)
- [Controllers](https://i.imgur.com/NL8bnRq.png)
- [HTTP Codes](https://1.bp.blogspot.com/-l4ENbjEoXDw/XD9PPNWIxmI/AAAAAAAAV5M/uVEboPRHjjEKvQ4KOHWpOiGwduqGVNFtACLcBGAs/s1600/statuscode.png)
- [Middlewares](https://i.imgur.com/Hb2H7vK.png)
    - [O que podem?](https://i.imgur.com/bzfCX60.png)
- Banco de Dados
    - [O que é?](https://i.imgur.com/bmHG1J8.png)
    - [Estrutura](https://i.imgur.com/s8PNKg5.png)
    - [Tabelas](https://i.imgur.com/dTBHCby.png)
        - [Exemplo](https://i.imgur.com/JQRgh6E.png)
    - [B.D. Relacional](https://i.imgur.com/QqB03US.png) (Utiliza SQL)
        - Conectar com o B.D. (SQLite)
    - **Beekeeper** - SGBD (Sistema Gerenciador de Banco de Dados)
        - Utiliza-se para [visualizar](https://i.imgur.com/H3sONip.png) o conteúdo do B.D.
    - [SQL](https://i.imgur.com/BrFwaem.png)
        - Data Definition Language, [Comandos DDL](https://i.imgur.com/VQ6Lbp4.png)
            - **CREATE**
            - **DROP**
            - **ALTER**
        - Data Manipulation Language, [Comandos DML](https://i.imgur.com/K6DdiRn.png)
            - **C**reate -> `INSERT`
            - **R**ead -> `SELECT`
            - **U**pdate -> `UPDATE`
            - **D**elete -> `DELETE`
    - Usar SQL (DML) puro no JavaScript
    - Criptografia com `bcryptjs`
    - [SQL Query Builder](https://i.imgur.com/14fmqjL.png)
        - [Exemplo](https://i.imgur.com/nLBm296.png)
        - [Knex.js](https://www.npmjs.com/package/knex)
        - [Knex vs SQL Puro](blob:https://imgur.com/b6e92281-0f2b-499e-a556-85710c9b0dc5)
    - [Migrations](https://i.imgur.com/T1N80Kr.png)
        - [Métodos UP e DOWN](https://i.imgur.com/FOXmukI.png)
    - [NPM](https://i.imgur.com/oXabzEX.png) vs [NPX](https://i.imgur.com/Ipt7ZPs.png)
    - [Primary key, Foreign key e Cardinalidade](https://i.imgur.com/Wpvqd47.png) 
    - [Conceito de Inner Join](https://i.imgur.com/PefXBYq.png)
        - [Unir Tabelas](https://i.imgur.com/Trm8SC8.png)
        - [Exemplo](https://i.imgur.com/wx18SB6.png)
    - [Map](https://i.imgur.com/9itgKtJ.png) e [Filter](https://i.imgur.com/nsKNgCm.png)


## Referência

 - [Rocketseat 🚀](https://www.rocketseat.com.br/)
## Autor ✍️

- [Hélio Lúcio](https://www.linkedin.com/in/heliolj/)


## Feedback 🗣️

Se você tiver algum feedback, por favor me deixe saber por alguns canais de contato:

- [Linkedin](https://www.linkedin.com/in/heliolj/)
- [Email](mailto:helio.lucio.jr@hotmail.com)


## Licença 👨‍💼

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/helioLJ/git-fav/blob/main/license)