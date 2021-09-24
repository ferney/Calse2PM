const nombre="jose";

function lenguajes(){
    return {id:1,nombre:"java"};
}

function array(){
    return [
        {id:1,nombre:"let"},
        {id:2,nombre:"var"},
        {id:3,nombre:"const"}
    ];
}

function sumar(a,b){
    return a+b;
}

function validarNom(nombre){
    let nom=nombre;
if(nom===""|| nom===null || nom.length===0
|| !(/^[a-zA-Z0-9\_\-]{4,30}$/.test(nom))){
    return "ingrese correctamente el campo";
}
}

function validarContra(cont){
    let con=cont;
if(con===""|| con===null || con.length===0
|| !(/^[a-zA-Z0-9]{8}$/.test(con))){
    return "ingrese correctamente el password";
}
}

//
function validarPreg(cont){
    let con=cont;
if(con===""|| con===null || con.length===0){
    return "ingrese correctamente la pregunta";
}
}

function validarRes(cont){
    let con=cont;
if(con===""|| con===null || con.length===0
|| !(/^[a-zA-Z0-9]{1,30}$/.test(con))){
    return "ingrese correctamente la respuestas";
}
}

module.exports={nombre,lenguajes,array,sumar,validarNom,validarContra,
    validarPreg,validarRes};
/*
module.exports.nombre=nombre;
module.exports.lenguajes=lenguajes;
module.exports.array=array;
module.exports.sumar=sumar;
*/
