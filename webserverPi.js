var http = require('http');
var port = 8080;

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-type': 'text/html'})
	res.write(req.url);
	res.end();
}).listen(port);

console.log("Server listening on port " + port);
console.log("Press Ctrl+C to exit.");