# Índice
1. [Como começar um projeto qualquer em NodeJS](#01-como-começar-um-projeto-qualquer-em-nodejs)
2. [Como criar um servidor HTTP com Restify](#02-como-criar-um-servidor-http-com-restify)
3. [O que é importante saber sobre o HTTP antes de sair codando](#03-o-que-é-importante-saber-sobre-o-http-antes-de-sair-codando)
4. [Como criar uma respota para o path /](#04-como-criar-uma-resposta-para-path-)
5. [Chato demais ter que ficar reiniciando o servidor na mão. Que venha o nodemon!](#05-chato-demais-ter-que-ficar-reiniciando-o-servidor-na-mão-que-venha-o-nodemon)
6. [Criando um recurso para retornar os nomes e seus significado](#06-criando-um-recurso-para-retornar-os-nomes-e-seus-significado)

# O que você aprenderá no workshop

# Configurações necessário para começar o workshop

# 01. Como começar um projeto qualquer em NodeJS

## Objetivo
Uma vez que você faz a instalação do NodeJS na sua máquina, você instalalou sem perceber um gerenciador de pacote chamado **npm** (Node Package Manager). Esse gerenciador é similar ao apt-get utilizado no Linux ou o homebrew do Mac.

Vamos utilizar o `npm` para iniciar o nosso projeto com NodeJS definindo as seguintes propriedades do nosso projeto:
- Nome (package name);
- Versão (version);
- Descrição (description);
- Arquivo que o seu projeto inicia (entry point);
- Script de teste (test command);
- Repositório git (git repository);
- Palavras chaves pra localizar o seu projeto se ele for opensource é uma boa definir isso com cuidado (keyworkds);
- Autor (author);
- Licença, também utilizamos ela em caso de projetos opensource, particulamente gosto de duas licençar MPL-2.0 e Apache2 (license);

**Obs.** O texto que está entre parênteses e em inglês é a chave que o npm usa para guardar essas informações.

## Passo a passo com código

##### Terminal
Para navegar até a pasta do seu usuário:
```shell
cd ~
```

Para criar a pasta:
```shell
mkdir restify-workshop
```

Entrar na pasta **restify-workshop**:
```shell
cd restify-workshop
```

Rodar o comando para definirmos as propriedades do projeto (lembre-se que você tem que estar dentro da pasta **restify-workshop**):
```shell
npm init
```
![Imagem das peguntas que são feitas após o comando npm init](img/npm-init.gif)

> Assim que você der o ENTER após o comando você irá começar a responder as peguntas sobre as propriedades do seu projeto, no momento que você terminar de responder essas perguntas, será apresentado um resumo onde você poderá verificar se está tudo certo, uma vez que você confirmar, nesse momento será criado pelo *npm* um arquivo chamado **package.json** e é nesse arquivo que é guardado todas as suas respostas. Vamos falar mais sobre esse arquivo durante os próximos exercícios.

# 02. Como criar um servidor HTTP com Restify

## Objetivo
Criar um servidor HTTP sem utilizar um framework é bem triste e você sofrerá muito, tudo que você sofrerá já foi resolvido pela comunidade por isso usamos um framework como o *Restify*. Tem outros problemas sobre não usar um framework como mostrei nesse post:
http://blog.caelum.com.br/como-criar-um-servidor-http-com-nodejs

Agora vamos criar um servidor utilizando o *Restify* que responderá apenas quando o usuário acessar a home em [http:localhost:3000](http:localhost:3000)

## Passo a passo com código

1. Abra seu terminal e execute o comando abaixo para instalar o *restify* como uma dependência do projeto:

## Terminal
```shell
npm i restify
```

>Após rodar esse comando, você verá que no arquivo **package.json** foi adicionado mais uma chave chamada *dependencies*, dentro dessa chave você terá o **restify** com a identificação de qual versão vamos utilizar do **restify**.

## Exemplo de como ficará o seu package.json
```
{
  "name": "restify-workshop",
  "version": "1.0.0",
  "description": "Projeto do workshop de restify do meetup Front End SP",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/MarcoBrunoBR/restify-workshop.git"
  },
  "keywords": [
    "restify"
  ],
  "author": "Marco Bruno",
  "license": "MPL-2.0",
  "bugs": {
    "url": "https://github.com/MarcoBrunoBR/restify-workshop/issues"
  },
  "homepage": "https://github.com/MarcoBrunoBR/restify-workshop#readme",
  "dependencies": {
    "restify": "^7.1.1"
  }
}
```


2. Desntro da pasta **restify-workshop** crie um arquivo chamado **index.js**, nesse arquivo vamos importar o *restify*:

### Arquivo index.js
```
const restify = require('restify')
```

> O `require` é utilizado para importar as dependências, API que o Node ou uma arquivo *JavaScript* que nós mesmo podemos desenvolver. No código anterior utilizamos o `require` para importar o *framework restify* que retorna pra gente um objeto desse *framework que guardamos na `const` com o nome de `restify`.

3. Vamos adicionar uma segunda linha que irá criar o servidor com o *restify*:

### Arquivo index.js
```
const restify = require('restify')

const server = restify.createServer()
```

> Utilizamos o método `createSever()` que é um recurso da nossa variável `restify`, esse método retorna pra gente um servidor que guardaremos dentro da varíavel `server` (servidor). Estamos utilizando o nome das variaveis em inglês porque você será cobrado pelo mercado de trabalho para escrever dessa maneira, por favor não me leve a mal se você não souber inglês ou tiver dificuldade com ele.

4. Infelizmente não estamos com o nosso servidor de pé só criamos ele, para colocar o servidor de pé precisamos chamar o método *liten* que está disponivel na variavel *server*, esse método espera receber dois parâmetros sendo o primeiro a porta e o segundo uma função que será executada no momento que o servidor estiver disponível, dentro dessa função vamos ter dois *console.log*, um que falará onde o sevidor está de pé e o outro falará como faz para derrubar o servidor. Pra manter a legibilidade do código vamos criar um variável chamada *port* (porta) que guardará a nossa porta com o valor 3000.

4. Agora vamos colocar nosso servidor de pé na porta 3000:

### Arquivo index.js
```
const restify = require('restify')
const port = 3000

const server = restify.createServer()

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})
```

> O método `listen` disponível no `server` é responsável por colocar o servidor de pé com as configurações que vamos definir nos próximos exercícios. Podemos passar 3 parâmentros, o primeiro é a porta do servidor, segundo o *ip* do servidor e o terceiro a função que será executada no momento que o servidor estiver de pé. Somente o primeiro parâmetro é obrigatório.
> No nosso código acima só temos dois parâmetros, nesse caso como o segundo parâmentro é uma função o *restify* atribui para o parâmentro *ip* que deixamos de passar o valor padrão que é *localhost*

5. Pra executarmos o código da **index.js**, volte no terminal:

### Terminal
Navegue até a pasta do projeto (se já estiver nela ignore esse passo):
```shell
cd ~/Desktop/restify-workshop
```

Rode o comando baixo pra executarmos a **index.js** com o NodeJS:
```shell
node index.js
```

Se tudo deu certo você receberá a seguinte saída no seu terminal
```shell
Servidor de pé em http://localhost:3000
Pra derrubar o servidor: ctrl + c
```

Pra termos certeza que o servidor está de pé, vamos até o *browser* (navegador) para acessarmos a URL http://localhost:3000, se você tiver uma resposta parecida com a imagem a seguir está tudo certo apesar de ser uma mensagem de erro:

![](img/resultado-no-browser.png)

# 03. O que é importante saber sobre o HTTP antes de sair codando
Esse conteúdo vou deixar pra explicar em aula e deixar você fazer suas anotações, mas vale deixar alguma representação visual sobre como funciona o HTTP:

![](img/lousa-http-api-rest.png)

Pretendo fazer um vídeo explicando como funciona o HTTP e a teoria por trás dele, mas ainda não está feito, por enquanto será a explicação da aula mesmo :-)

# 04. Como criar uma resposta para path /

## Objetivo
Por enquanto quando acessamos a nosso servidor pelo browser no path / recebemos como resposta um erro que o próprio *restify* criou pra nós, queremos trocar essa mensagem padrão com uma resposta que estará no nosso controle. Nessa reposta vamos implementar um *JSON* com a chave `msg` e o valor será `"Logo em um futuro próximo nós teremos aqui uma lista dos recursos que você pode acessar em nossa API de nomes e significados"`.

## Passo a passo com código
1. No arquivo **index.js** crie uma rota pra responder ao *path* da *home* que é apenas uma **/**. Para isso vamos utilizar o método `get` que está disponível na variável `server`:

### Arquivo index.js
```javascript
const restify = require('restify')
const port = 3000

const server = restify.createServer()

server.get('/', () => {
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})
```

> Utilizando o método `get` estamos dizendo que o *path* (**/**) que passamos para ele como primeiro parâmentro só será executado se a requisição for do *method HTTP GET*, o segundo parâmetro que é uma função será executada no momento que uma requisição para a home (**/**) chegar ao servidor, lembrando que essa requisição tem que ser do *method HTTP GET*.

2. É necessário derrubar o servidor e colocar ele novamente de pé, pra isso aperte **ctrl + c** e em seguida execute o comando abaixo (lembre-se que você tem que estar na pasta do projeto):

### Terminal
```
node index.js
```

Tente acessar [http://localhost:3000](http://localhost:3000) no *browser* e você verá que ele ficará perdido esperando uma resposta.

3. Dentro da função que passamos como segundo parâmentro vamos criar uma resposta utilizando o método `send`:

### Arquivo index.js
```
const restify = require('restify')
const port = 3000

const server = restify.createServer()

server.get('/', (req, res) => {
  res.send({msg: 'Logo em um futuro próximo nós teremos aqui uma lista dos recursos que você pode acessar em nossa API de nomes e significados'})
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})
```


4. Sempre que fazemos uma alteração no nosso código é necessario reiniciar o servidor, então pressione **ctrl + c** e em seguinda execute o comando abaixo estando dentro da pasta do projeto:

### Terminal
```
node index.js
``` 

Agora se você voltar ao *broser* e acessar [http://localhost:3000](http://localhost:3000) verá a seguinte resposta:
![](img/primeira-resposta-da-home.png)

# 05. Chato demais ter que ficar reiniciando o servidor na mão. Que venha o nodemon!

## Objetivo
Toda vez que fazemos uma alteração no nosso código precisamos ficar reiniciando o servidor na mão, esse trabalho é chato, mas felizmente temos uma solução desenvolvida pela comunidade chamada **nodemon**. Por tanto, vamos instalar ela mas apenas como uma dependência do ambiente de desenvolvimento dado que não vamos utilizar o **nodemon** em produção.

Também vamos criar o nosso primeiro *npm script* para não termos que instalar o **nodemon** como uma dependência global e sim uma dependência apenas do nosso projeto. Sempre que possível é uma boa prática evitar dependências globais porque elas são difícieis de administrar, por exemplo: imagine que temos dois projetos feitos em *node* e ambos estão utilizando o *nodemon* mas os projetos utilizam versões diferentes do *nodemon*. Se você estiver com *nodemon* instalado de forma global só poderá ter uma versão do *nodemon* em sua máquina, causando assim a necessidade de ficar trocando de versão do *nodemon* quando trocar o projeto que você estiver trabalhando.

## Passo a passo com código
1. Para instalar o **nodemon** como uma dependência apenas para o ambiente de desenvolvimento, não deixaremos de utilizar o gerenciador de pacotes do *node* o *npm*, mas dessa vez vamos também passar um parâmetro *--save-dev* para informar que o **nodemon** será apenas útil ao ambiente de *dev* (abreviação que utilizamos pra falar do ambiente de desenvolvimento que vem da palavra em inglês developer):

### Terminal
```
npm i nodemon --save-dev
```

Agora que instalamos o **nodemon** como uma dependência de um ambiente específico, o *npm* adiciona uma nova chave (*devDependencies*) para as dependências do ambiente de *dev*, por isso que o seu **package.json** ficará dessa forma:

### Arquivo package.json
```
{
  "name": "restify-workshop",
  "version": "1.0.0",
  "description": "Projeto do workshop de restify do meetup Front End SP",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/MarcoBrunoBR/restify-workshop.git"
  },
  "keywords": [
    "restify"
  ],
  "author": "Marco Bruno",
  "license": "MPL-2.0",
  "bugs": {
    "url": "https://github.com/MarcoBrunoBR/restify-workshop/issues"
  },
  "homepage": "https://github.com/MarcoBrunoBR/restify-workshop#readme",
  "dependencies": {
    "restify": "^7.1.1",
    "to": "^0.2.9",
    "update": "^0.7.4"
  },
  "devDependencies": {
    "nodemon": "^1.17.3"
  }
}
```

2. Com o **nodemon** instalado, não vamos mais subir o servidor como estavamos fazendo anteriormente:

### Terminal
```
node index.js
```

No lugar do comando *node* vamos utilizar o comando *node_modules/nodemon/bin/nodemon.js*, por isso vamos subir nosso servidor assim no terminal:

### Terminal
```
node_modules/nodemon/bin/nodemon.js index.js
``` 

3. Triste ter que escrever um caminho tão grande toda vez que tivermos que utilizar o *nodemon*, felizmente tem uma caminho feliz pra resolver isso, só precisamos ir até o nosso arquivo **package.json** e adicionar um *npm script* com a chave *dev* e nessa chave passar o conteúdo *nodemon index.js*. Ah! Se no seu *package.json* a chave *main* estiver com o valor correto do arquivo que é o início da sua aplicação, então não é necessário passar no conteúdo da chave *dev* o arquivo *index.js* deixando o conteúdo da chave ainda mais simples e apenas com o valor *nodemon*. Isso acontece porque uma vez que não passamos qual é o arquivo que queremos iniciar com o *nodemon* o próprio *nodemon* executa o arquivo que passamos na chave *main*. Bom, altere seu arquivo **package.json** adicionando apenas uma linha de código dentro da chave *scripts* que já existe no arquivo:

### Arquivo package.json
```
{
  "name": "restify-workshop",
  "version": "1.0.0",
  "description": "Projeto do workshop de restify do meetup Front End SP",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/MarcoBrunoBR/restify-workshop.git"
  },
  "keywords": [
    "restify"
  ],
  "author": "Marco Bruno",
  "license": "MPL-2.0",
  "bugs": {
    "url": "https://github.com/MarcoBrunoBR/restify-workshop/issues"
  },
  "homepage": "https://github.com/MarcoBrunoBR/restify-workshop#readme",
  "dependencies": {
    "restify": "^7.1.1",
    "to": "^0.2.9",
    "update": "^0.7.4"
  },
  "devDependencies": {
    "nodemon": "^1.17.3"
  }
}
```

Feita essa alteração no arquivo **package.json** podemos subir o nosso servidor utilizando o *nodemon* com o seguinte comando no terminal:

### Terminal
```
npm run dev
```

Pronto! Agora toda vez que fizermos uma alteração no nosso código não será mais necessário reiniciar o servidor na mão, o próprio *nodemon* fará o trabalho para nós.

# 06. Criando um recurso para retornar os nomes e seus significado
Primeiro precisamos criar o path **/nome** que terá a responsabilidade de responder todos os nomes cadastrados e seus significados. Como até o momento não temos um banco de dados vamos guardar 3 nomes e seus significados em uma lista. Só escolher três nomes dessa tabela a seguir ou procurar o seu e de duas pessoas que gosta e colocar na lista:
```
╔═══════════╦══════════════════════════════════════════════════════╗
║   nome    ║                 significado                          ║ 
╠═══════════╬══════════════════════════════════════════════════════║
║ Henri     ║ O governante da casa, senhor do lar                  ║ 
║ Joviane   ║ Presente de Júpiter                                  ║ 
║ Rafael    ║ Deus curou ou curado por Deus                        ║ 
║ Alex      ║ Protetor do homem ou defensor da humanidade          ║
║ Ian       ║ Deus é gracioso, presente de Deus ou graça de Deus   ║
║ Luna      ║ Lua, a iluminada, a feminina                         ║ 
╚═══════════╩══════════════════════════════════════════════════════╝
```

O código para criar essa resposta não tem nada de novo, sendo assim tente implementar sem o olhar a seção **Passo a passo com código**.

## Passo a passo com código
1. Vamos criar um recurso para responder o seguinte *path*: **/nome**. Para isso entre no arquivo **index.js** e utilize o método *get* disponível na nossa variável *server* da mesma forma que fizemos no exercício de criar uma resposta para a o *path* da home (**/**):

### Arquivo index.js
```
const restify = require('restify')
const port = 3000

const server = restify.createServer()

server.get('/', (req, res) => {
  res.send({msg: 'Logo em um futuro próximo nós teremos aqui uma lista dos recursos que você pode acessar em nossa API de nomes e significados'})
})

server.get('/nome', () => {
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})
```

2. Agora precisamos adicionar os dois parâmetros para a função que passamos no segundo parâmetro do méodo *get*, os parâmetros são *req* e *res*. Em seguida podemos criar um variável chamadas *names* que guardará 3 nomes e seus significados, para podermos passar essa variável dentro do método *send* de nosso parâmetro *res*:

### Arquivo index.js
```
const restify = require('restify')
const port = 3000

const server = restify.createServer()

server.get('/', (req, res) => {
  res.send({msg: 'Logo em um futuro próximo nós teremos aqui uma lista dos recursos que você pode acessar em nossa API de nomes e significados'})
})

server.get('/nome', (req, res) => {
  const names = [
    {
      name: 'Henri',
      meaning: 'O governante da casa, senhor do lar'
    },
    {
      name: 'Joviane',
      meaning: 'Presente de Júpiter'
    },
    {
      name: 'Luna',
      meaning: 'Lua, a iluminada, a feminina'
    }
  ]

  res.send(names)
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})
```

# 07. Crie um recurso pra salvar um nome e seu significado

## Objetivo
Pra conseguir salvar um nome e o seu significado vamos criar um *path* **/nome** que responderá apenas o *method HTTP* (método HTTP) *POST*, no corpo da requisição vamos esperar que o usuário nos mande um *JSON* com duas chaves: name e meaning. A representação do *JSON* deverá ser assim:

```
{
  name: "Bruno",
  meaning: "Pode ter vindo do latim brunus, como do germânico brun, que querem dizer literalmente “marrom" ou "moreno”"
}
```

A princípio vamos pegar o *JSON* que vimos anteriormente e adicionar ele em nossa lista ```name```.
Para testar nosso novo recurso, precisamos de alguma forma fazer um *POST* para ao *path* **/nome**. Até agora utilizamos o *browser* para testar a nosso primeiro *path* porque o *method HTTP* padrão do *browser* é um *GET*, mas como estamos querendo fazer um *POST*, vamos parar de utilizar o *browser* para testar nossa *API* e começar a usar o *Postman*, com ele podemos fazer todos os *methods HTTP* de uma forma simples e feliz :-)

## Passo a passo com código
1. Vamos abrir o arquivo **index.js** e dentro dele vamos utilizar o *method post* que está disponível em nossa variável ```server```, esse método funciona de forma similar ao método *get* que utilizamos anteriormente, portanto o método *post* recebe 2 parâmetros sendo o primeiro o *path* e o segundo a função que será executada no momento que um usuário realizar um requisição para o *path* informado no primeiro parâmetro, lembre-se que esssa requisção tem que ser no *method HTTP POST*.

### Arquivo index.js

```
const restify = require('restify')
const port = 3000

const server = restify.createServer()

server.get('/', (req, res) => {
  res.send({msg: 'Logo em um futuro próximo nós teremos aqui uma lista dos recursos que você pode acessar em nossa API de nomes e significados'})
})

server.get('/nome', (req, res) => {
  const names = [
    {
      name: 'Henri',
      meaning: 'O governante da casa, senhor do lar'
    },
    {
      name: 'Joviane',
      meaning: 'Presente de Júpiter'
    },
    {
      name: 'Luna',
      meaning: 'Lua, a iluminada, a feminina'
    }
  ]

  res.send(names)
})

server.post('/nome', () => {
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})
```

2. A função que passamos como segundo parâmetro em ```server.post``` recebe dois parâmentros sendo o primeiro informações sobre a *resquest* e o segundo terá informações sobre a *response*, vamos nomear os parâmentros como ```req``` e ```res```, como já fizemos quando criamos nosso primeiro recurso que mostra todos os nomes e seus significados:

### Arquivo index.js
```
const restify = require('restify')
const port = 3000

const server = restify.createServer()

server.get('/', (req, res) => {
  res.send({msg: 'Logo em um futuro próximo nós teremos aqui uma lista dos recursos que você pode acessar em nossa API de nomes e significados'})
})

server.get('/nome', (req, res) => {
  const names = [
    {
      name: 'Henri',
      meaning: 'O governante da casa, senhor do lar'
    },
    {
      name: 'Joviane',
      meaning: 'Presente de Júpiter'
    },
    {
      name: 'Luna',
      meaning: 'Lua, a iluminada, a feminina'
    }
  ]

  res.send(names)
})

server.post('/nome', (req, res) => {
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})
```

3. Agora que temos como pegar as informacões da *request* pelo parâmentro ```req``` e podemos trabalhar a **response** pelo ```res```. Com o parâmetro ```res``` em mão conseguimos enviar um *JSON* de teste pra vermos se o nosso *path* está funcionando, nesse *JSON* nós só teremos um chave chamada ```msg``` com o valor ```"O caminho /nome por method HTTP POST está funcionando de boas!"```:

### Arquivo index.js
```
const restify = require('restify')
const port = 3000

const server = restify.createServer()

server.get('/', (req, res) => {
  res.send({msg: 'Logo em um futuro próximo nós teremos aqui uma lista dos recursos que você pode acessar em nossa API de nomes e significados'})
})

server.get('/nome', (req, res) => {
  const names = [
    {
      name: 'Henri',
      meaning: 'O governante da casa, senhor do lar'
    },
    {
      name: 'Joviane',
      meaning: 'Presente de Júpiter'
    },
    {
      name: 'Luna',
      meaning: 'Lua, a iluminada, a feminina'
    }
  ]

  res.send(names)
})

server.post('/nome', (req, res) => {
  res.send({ msg: "O caminho /nome por method HTTP POST está funcionando de boas!" })
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})
```

