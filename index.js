const http = require('http');


const server = http.createServer((request, response) =>{
	if(request.url === "/"){
	 response.writeHead(200, { 'Content-Type':'text/html'});
	 response.write("<h1>Voce acessou o servidor no container docker");
	 response.end();
	}
});

server.listen(3000, '0.0.0.0', ()=> console.log("server running on http://localhost:3000"));
