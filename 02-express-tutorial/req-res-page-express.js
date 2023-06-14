const http  = require('http');

const server = http.createServer((req,res)=>{

// console.log(req.method)
// console.log(req.url)
const url  = req.url;
if( url === '/')  {
    res.writeHead(200,{'content-type':'text/html'}) // if here the /html is changed to /plain then it will render the html code as text 
res.end('<h1> Home Page  </h1>')
}
else if ( url === '/about') {
    res.writeHead(200, {'content-type':'text/html'})
    res.end('<h1> about page </h1>')
}
else{
    res.writeHead(404, {'content-type':'text/html'})
    res.end('<h1> ERROR!! PAGE NOT FOUND </h1>')
}




})

server.listen(5000)

// the user will request for resources