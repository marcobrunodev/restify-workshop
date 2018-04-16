const restify = require('restify')
const port = 3000

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

const server = restify.createServer()

server.use(restify.plugins.bodyParser())

server.get('/', (req, res) => {
  res.send({msg: 'Logo em um futuro próximo nós teremos aqui uma lista dos recursos que você pode acessar em nossa API de nomes e significados'})
})

server.get('/nome', (req, res) => {
  res.send(names)
})

server.post('/nome', (req, res) => {
  const name = req.body

  names.push(name)

  res.send(names)
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})