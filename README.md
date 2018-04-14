# O que você aprenderá no workshop

# Configurações necessário para começar o workshop

# 01. Como começar um projeto qualquer em NodeJS

## Objetivo
Uma vez que você faz a instalação do NodeJS na sua máquina, você instalalou sem perceber um gerenciador de pacote chamado npm (Node Package Manager). Esse gerenciador é similar ao apt-get utilizado no Linux ou o homebrew do Mac, mal mas não sei qual seria o paralelo no Windows.

Vamos utilziar o npm para iniciar o nosos projeto com NodeJS definindo as seguintes propriedades do nosso projeto:
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

Crie uma pasta com o nome **restify-workshop** na pasta do seu usuário, gosto de fazer isso utilizando o terminal, se você estiver utilizando Linux ou Mac poderá executar os comandos a seguir em seu terminal (desculpa mas faz um bom tempo que não uso Windows e não sei como fazer isso nele):

### Terminal
Para navegar até a pasta do seu usuário:
```
cd ~
```

Para criar a pasta:
```
mkdir restify-workshop
```

Entrar na pasta **restify-workshop**:
```
cd restify-workshop
```

Rodar o comando para definirmos as propriedades do projeto (lembre-se que você tem que estar dentro da pasta **restify-workshop**):
```
npm init
```
![Imagem das peguntas que são feitas após o comando npm init](img/como-comecar-um-projeto-qualquer-em-nodejs/npm-init.gif)

Assim que você der o ENTER após o comando você irá começar a responder as peguntas sobre as propriedades do seu projeto, no momento que você terminar de responder essas perguntas, será apresentado um resumo onde você poderá verificar se está tudo certo, uma vez que você confirmar, nesse momento será criado pelo *npm* um arquivo chamado **package.json** e é nesse arquivo que é guardado todas as suas respostas. Vamos falar mais sobre esse arquivo durante os próximos exercícios.

# 02. Como criar um servidor HTTP com Restify

## Objetivo
Criar um servidor HTTP sem utilizar um framework é bem triste e você sofrerá muito, tudo que você sofrerá já foi resolvido pela comunidade por isso usamos um framework como o Restify. Tem outros problemas sobre não usar um framework como mostrei nesse post:
http://blog.caelum.com.br/como-criar-um-servidor-http-com-nodejs

Agora vamos criar um servidor utilizando o Restify que responderá apenas quando o usuário acessar a home em http:localhost:3000

## Passo a passo com código

1. Primeiro vamos instalar o **restify** como uma dependência do nosso projeto. Abra o terminal e o rode o seguinte comando:

## Terminal
```
npm i restify
```

Após rodar esse comando, você verá que no arquivo **package.json** foi adicionado mais uma chave chamada *dependencies*, dentro dessa chave você terá o **restify** com a identificação de qual versão vamos utilizar do **restify**.

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


2. Crie uma arquivo chamado **index.js** dentro da pasta **restify-workshop**, dentro desse arquivos primeiro precisamos chamar a nossa dependência *restify* e guardar ela em uma variável que não varia (uma constante)chamada *restify*:

### Arquivo index.js
```
const restify = require('restify')
```

3. Em seguida precisamos criar um servidor utilizando o *restify*. Para isso utilizamos o método *createSever()* que é um recurso da nossa variável *restify*, esse método retorna pra gente um servidor que guardaremos dentro da varíavel *server* (servidor). Estamos utilizando o nome das variaveis em inglês porque você será cobrado pelo mercado de trabalho para escrever dessa maneira, por favor não me leve a mal se você não souber inglês eu tiver dificuldade como eu também tenho.

### Arquivo index.js
```
const restify = require('restify')

const server = restify.createServer()
```

4. Infelizmente não estamos com o nosso servidor de pé só criamos ele, para colocar o servidor de pé precisamos chamar o método *liten* que está disponivel na variavel *server*, esse método espera receber dois parâmetros sendo o primeiro a porta e o segundo uma função que será executada no mommento que o servidor estiver disponível, dentro dessa função vamos ter dois *console.log*, um que falará onde o sevidor está de pé e o outro falará como faz para derrubar o servidor. Pra manter a legibilidade do código vamos criar um variável chamada *port* (porta) que guardará a nossa porta com o valor 3000.

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

Só pra termos certeza que o servidor está de pé vamos até o browser (navegador) para acessarmos a URL http://localhost:3000, se você tiver uma resposta parecida com a imagem a seguir está tudo certo apesar de ser uma mensagem de erro:

![](img/resultado-no-browser.png)