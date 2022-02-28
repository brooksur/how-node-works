const EventEmitter = require('events')
const http = require('http')

const divider = '----------------------------------------------'

class Sales extends EventEmitter {
  constructor() {
    super()
  }
}

const myEmitter = new Sales()

myEmitter.on('newSale', () => {
  console.log(divider)
  console.log('\n\nThere was a new sale!\n')
})

myEmitter.on('newSale', () => {
  console.log('Customer name: Brooks\n')
})

myEmitter.on('newSale', (stock) => {
  console.log(`There are now ${stock} items left in stock.\n\n`)
  console.log(divider)
})

myEmitter.emit('newSale', 9)

const server = http.createServer()

server.on('request', (req, res) => {
  console.log('Request received')
  res.end('Request received')
})

server.on('request', (req, res) => {
  console.log('Another request received')
})

server.on('close', () => {
  console.log('Server closed')
})

server.listen(8000, '127.0.0.1', () => {
  console.log('waiting for request')
})
