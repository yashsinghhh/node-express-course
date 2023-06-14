const http  = require('http');

const server = http.createServer((req,res)=>{
console.log('user hit the server')
res.end('home page ( here we have used this to show that all the content has been sent and so that the page could be loaded)')
})

server.listen(5000)