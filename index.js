const restify = require('restify')
const port = 3000

const server = restify.createServer()

server.get('/', (req, res) => {
  res.send('Ae! Servidor criado veio com respostas para o path /.')
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})