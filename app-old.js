const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'content-type' : 'application/json'});
    const salida = {
        nombre: 'fernando',
        edad: 99,
        url: req.url
    };
    res.write(JSON.stringify(salida));
    res.end();
}).listen(80);
console.log('escuchando el puerto 80');