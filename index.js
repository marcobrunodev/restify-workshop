const restify = require('restify')
const port = 3000

const server = restify.createServer()

server.get('/', (req, res) => {
  res.send({msg: "Logo em um futuro próximo nós teremos aqui uma lista dos recursos que você pode acessar em nossa API de nomes e significados"})
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})