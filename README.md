# Repositório de War Room Substrybe!

Este repositório é dedicado a exercícios complementares fora do conteúdo do course e das aulas ao vivo #VQV

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do desafio a partir deste repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos (este desafio não possui avaliação, mesmo sendo necessário o push do resultado final).

---

# Sumário

- [Contexto](#contexto)
- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
    - [Dinâmica de desenvolvimento](#dinâmica-de-desenvolvimento)
    - [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Antes de começar](#antes-de-começar)
  - [Observações importantes](#-observações-importantes)
    - [Dicas](#dicas)
  - [Lista de Requisitos](#lista-de-requisitos)
    - [1 - Sua aplicação deve ter o endpoint POST `/plans`](#1---sua-aplicação-deve-ter-o-endpoint-post-plans)
    - [2 - Sua aplicação deve ter o endpoint POST `/subscribe`](#2---sua-aplicação-deve-ter-o-endpoint-post-subscribe)
    - [3 - Sua aplicação deve ter o endpoint POST `/login`](#3---sua-aplicação-deve-ter-o-endpoint-post-login)
    - [4 - Sua aplicação deve ter o endpoint POST `/:id/profiles`](#4---sua-aplicação-deve-ter-o-endpoint-post-id-profiles)
    - [5 - Sua aplicação deve ter o endpoint GET `/plans`](#5---sua-aplicação-deve-ter-o-endpoint-get-plans)
    - [6 - Sua aplicação deve ter o endpoint GET `/user/:id`](#6---sua-aplica%C3%A7%C3%A3o-deve-ter-o-endpoint-get-userid)
    - [7 - Sua aplicação deve ter o endpoint PUT `/user/:id/plan`](#7---sua-aplica%C3%A7%C3%A3o-deve-ter-o-endpoint-put-useridplan)
- [Avisos Finais](#avisos-finais)

# Contexto

**Battle day**

Na empresa em que você trabalha como pessoa desenvolvedora de software, hoje é um dia de batalha. A empresa possui uma plataforma de streamming que foi lançada em modelo público, anônimo e gratuito, para entrar no mercade de maneira agressiva e conquistar clientes em meio ao cenário de concorrência atual. 

Neste momento a plataforma já atingiu a maturidade e a audiência planejadas como meta, desta maneira, é necessário avançar para a próxima etapa e construir a gestão de planos pagos para acesso ao material exclusivo para assinantes.

O sistema de assinantes deve ser construído o mais breve possível, e para isto você e demais pessoas profissionais da empresa, com alta capacidade de resolução de problemas e comprometimento com a qualidade, estão sendo convocadas para uma Sala de Guerra (War Room), com o objetivo de entregar ao final do dia o máximo de requisitos implementados para o sistema de gerenciamento de planos de assinaturas denominado Substrybe.

As regras de negócio consistem em:

- cadastrar planos de assinatura com os dados: nome e valor;
- auto cadastro de usuário: nome, email e senha;
- usuários se inscrevem escolhendo o plano de assinatura, e podem trocar o plano
- manter um histórico dos planos já assinados pelos usuários
- usuários cadastrarem perfis de acesso: nome do perfil

# Habilidades 

Nesse desafio, você vai construir um back-end usando `ORM` com o pacote `sequelize` do `npm`, e será capaz de:
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer `CRUD` com o `ORM`

# Entregáveis

Para entregar o seu desafio você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## O que deverá ser desenvolvido

Você vai arquiteturar e desenvolver uma API de um CRUD de sistema de planos de assinatura (com o Sequelize). Começando pela API, você vai desenvolver alguns endpoints (seguindo os princípios do REST) que estarão conectados ao seu banco de dados.

Primeiro, você irá criar uma tabela para os usuários que desejam se cadastrar na aplicação. Após isso, criará também uma tabela de Perfis para seus Usuários e a tabela de Planos. Por fim a tabela de assinatura será seu foco, guardando todas as informações dos planos escolhidos pelos usuários. Essa é apenas uma recomendação!

---

## Desenvolvimento

Você deve desenvolver uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

Para fazer o cadastro de perfis e escolher o plano é necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `profile` e entre `user` e ``plans. 

### Dinâmica de desenvolvimento

Sendo este desafio em grupo, em uma War Room, aconselhá-se que a equipe trabalhe no formato `pair programming`, definindo uma ordem de rodízio entre as pessoas participantes, para ocuparem o papel de piloto. 

Divida o tempo total informado para trabalhar no desafio de maneira igual entre as pessoas participantes - _lembre de considerar o tempo final para envio do resultado_. Também pode-se definir uma janela de tempo fixa, por exemplo 20 min, e realizar o rodízio de maneira a cada pessoa poder atuar como piloto mais de uma vez durante o prazo do desafio.

A pessoa piloto inicial deve realizar o clone em sua máquina, criar o branch de trabalho com o nome das pessoas da equipe, avançar com a implementação (auxiliada pelas demais integrantes da equipe), ao final de seu tempo de trabalho, realizar o push para o repositório. A pessoa seguinte deve fazer o clone, checkout da branch criada para sua equipe, dar continuidade como piloto e assim sucessivamente entre todas as pessoas da equipe.

 
### Entrega

  - Desafio em grupo.

  - Entregar o máximo de implementação realizada até o final do desafio.


---

# Instruções para entregar seu projeto:


### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-0x-war-room-tryblans.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-0x-war-room-tryblans`

2. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch à qual você vai submeter os `commits` do seu desafio
    * Você deve criar uma branch no seguinte formato: `nomes-de-usuario-nome-do-desafio`
    * Exemplo: `git checkout -b joao-maria-jose-sd-0x-project-blogs-api`

3. Siga os passos que sempre realiza para os projetos até o push do mesmo. Não deve ser criado `Pull Request` _(PR)_ para este desafio, apenas ser realizada a entrega por push.

---
# Requisitos do projeto:

## Antes de começar:

### ⚠️ Leia-os atentamente e siga à risca o que for pedido. ⚠️

### 👀 Dicas importantes:

**Configure variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

**Faça essas configurações também para as variáveis de ambiente usadas nesses arquivo:**

`sd-0x-project-blogs-api/config/config.js`

```
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'my_database',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'my_database',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'my_database',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
```

#### Status HTTP

Tenha em mente que todas as "respostas" devem respeitar os [status do protocolo HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status) com base no que o REST prega.

Alguns exemplos:

  - Requisições que precisam de token mas não o receberam devem retornar um código de `status 401`;

  - Requisições que não seguem o formato pedido pelo servidor devem retornar um código de `status 400`;

  - Um problema inesperado no servidor deve retornar um código de `status 500`;

  - Um acesso ao criar um recurso, no nosso caso usuário ou post, deve retornar um código de `status 201`.

---

#### Sugestão para as tabelas:

- O seu projeto deverá usar um `ORM` para criar e atualizar o seu banco. 


- **Users**, contendo dados com a seguinte estrutura::

  ```json
  {
    "id": 1,
    "name": "Tom Sawyer",
    "email": "tom@email.com", // tem quer ser único
    "password": "123456",
  }
  ```
- **Profiles**, contendo dados com a seguinte estrutura::

  ```json
  {
    "id": 18,
    "name": "News",
    "userId": 1
  }
  ```

- **Plans**, contendo dados com a seguinte estrutura:

  ```json
  {
    "id": 50,
    "name": "Gold",
  }
  ```

- **UserPlans**, contendo dados com a seguinte estrutura::

  ```json
  {
    "userId": 1,
    "planId": 1,
    "startDate": 2022-04-11,
    "endDate": null // se nulo o plano está ativo, será preenchido apenas quando o plano encerrar o plano ou mudar para outro
  }
  ```
  
  **Os dados acima são fictícios, e estão aqui apenas como exemplo**  

  
## Lista de Requisitos:

### 1 - Sua aplicação deve ter o endpoint POST `/plans`

- Esse endpoint deve receber um _Plano_ no corpo da requisição e criá no banco. O corpo da requisição deve ter a seguinte estrutura:

  ```json
  {
    "name": "Gold",
  }
  ```

- Caso o post não contenha o `name` a API deve retornar um erro de `status 400`.


### 2 - Sua aplicação deve ter o endpoint POST `/subscribe`

- O endpoint deve ser capaz de adicionar um novo user a sua tabela no banco de dados e neste momento inscrever o mesmo no plano escolhido;

- O corpo da requisição deverá ter o seguinte formato:

  ```json
  {
    "name": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "planId": 1,
  }
  ```
- O campo `name` deverá ser uma string com no mínimo de 8 caracteres;

- A senha deverá conter 6 caracteres. Ela é obrigatória;

- O id do plano é obrigatório e deve existir no banco de dados;

- retornar o usuário completo com os dados cadastrais do plano (_não somente o id_);

### 3 - Sua aplicação deve ter o endpoint POST `/login`

- O corpo da requisição deverá seguir o formato abaixo:

  ```json
  {
    "email": "email@mail.com",
    "password": "123456"
  }
  ```

- Caso algum desses campos seja inválido ou não exista um usuário correspondente no banco de dados, retorne um código de status 400 com o corpo `{ message: "Invalid fields" }`.

- Caso esteja tudo certo com o login, a resposta deve ser um token `JWT`, no seguinte formato:

  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
  ```
  _O token anterior é fictício_


### 4 - Sua aplicação deve ter o endpoint POST `/profiles`


- Esse endpoint deve receber um _Perfil_ no corpo da requisição e criá-lo no banco. O corpo da requisição deve ter a seguinte estrutura:

 ```json
  {
    "name": "Minhas Séries",
    "userId": 1
  }
  ```
  
 - A requisição deve ter o token de autenticação nos headers e, caso contrário, retorne um código de `status 401`.


 - O usuário deve existir no banco de dados.


### 5 - Sua aplicação deve ter o endpoint GET `/plans`

- Esse endpoint deve listar todos os _Planos_ e retorná-los na seguinte estrutura:

```json
[
  {
    "id": 1,
    "name": "Gold",
  }
]
```

### 6 - Sua aplicação deve ter o endpoint GET `user/:id`

- Retorna um **Usuário** com o `id` especificado. O retorno deve ter os seguinte formato:

```json
  {
  "id": 1,
  "name": "Beyoncé",
  "email": "beyonce@email.com",
  "planId": 1,
  "plans": [
    "startDate": 2022-04-11,
    {
      "id": 1,
      "name": "Gold",
      "price": 44
    }
  ],
  "profiles": [
    {
      "id": 1,
      "name": "Minhas Séries"
    },
    {
       "id": 2,
       "name": "Meus Filmes"
    }
  ]
}
```

### 7 - Sua aplicação deve ter o endpoint PUT `/user/:id/plan`

- O endpoint deve receber no corpo da requisição um planId que será usado para criar uma nova inscrição.

- O corpo da requisição deve ter a seguinte estrutura:

  ```json
  {
    "planId": 2,
  }
  ```

- Deve ser enviado um token de authorização no header.

- Caso o usuário autenticado seja diferente do usuário sendo alerado, deve retornar um código `status 401`.

- Caso uma requisição sem token seja recebida, deve-se retornar um código de `status 401`.

- O planId é obrigatório e deve existir no banco de dados.

- O endpoint deve localizar o plano vigente anterior (com endDate == null) e alterar para a data atual, então criar a nova assinatura para o plano enviado com a data de início igual a atual e sem data de término.

--- 

## Depois de terminar o desenvolvimento 

_Ou ao final do prazo para a atividade ser realizada_

Para **"entregar"** seu desafio, faça o PUSH para o repositório ⚠.

**Lembre-se** que esta atividade simula uma entrega em dinâmica de War Room, por isso é importante entregar o seu desafio em qualquer estado de implementação que se encontre, ou mesmo com erros. 

---
