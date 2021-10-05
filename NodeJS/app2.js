const express=require('express');
const app=express();

app.get(
    '/',(pedido,respuesta)=>{
        respuesta.send(
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
        );    });

const server=app.listen(8888,
    ()=>{
        console.log('servidor corriendo al 100');
    }
    );