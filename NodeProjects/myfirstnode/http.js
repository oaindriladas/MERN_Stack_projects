var http = require('http');

http.createServer(function(req, res){
res.write("http server created");
res.end();
}).listen(3000, ()=>{ console.log("running on http");} )
