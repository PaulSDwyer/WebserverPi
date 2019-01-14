var http = require('http');
var port = 8080;

http.createServer(function(req, res) {
	console.log(req);
	res.write('Hello World!');
	res.end();
}).listen(port);

console.log("Server listening on port " + port);
console.log("Press Ctrl+C to exit.");