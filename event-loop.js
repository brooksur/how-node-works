const fs = require('fs')
const crypto = require('crypto')

const start = Date.now()
process.env.UV_THREADPOOL = 3

setTimeout(() => {
  console.log('Timer 1 finished')
}, 0)

setImmediate(() => {
  console.log('Immediate 1 finished')
})

fs.readFile('test-file.txt', () => {
  console.log('IO finished')

  setTimeout(() => {
    console.log('Timer 2 finished')
  }, 0)

  setTimeout(() => {
    console.log('Timer 3 finished')
  }, 3000)

  setImmediate(() => {
    console.log('Immediate 2 finished')
  })

  process.nextTick(() => {
    console.log('Process next tick')
  })

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha256', () => {
    console.log('Password encrypted', Date.now() - start)
  })

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha256', () => {
    console.log('Password encrypted', Date.now() - start)
  })

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha256', () => {
    console.log('Password encrypted', Date.now() - start)
  })

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha256', () => {
    console.log('Password encrypted', Date.now() - start)
  })
})

console.log('Hello from top level code')