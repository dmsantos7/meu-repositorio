const http = require('http');

http.createServer(
    (req, res) => {
        res.writeHead(200, {'Content-type': 'text/html'});

        res.end('Estamos na rota' ${req.url})
    }
).listen(80);