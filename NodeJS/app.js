const http=require('http');

const servidor=http.createServer(
    (pedido,respuesta)=>{
        respuesta.writeHead(200, {'Content-Type':'text/html'});
        respuesta.write(
            `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <title></title>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link href="css/style.css" rel="stylesheet">
                </head>
                <body>
                <h1>Página en Mantenimiento</h1>
                </body>
            </html>`
        );
        respuesta.end();
    });

servidor.listen(8888);
console.log('servidor corriendo');