//let traerDeB=require('./b');
function validar(){

var combo=document.getElementById('seleccion').selectedIndex;
var direccion=document.getElementById('dir').value;

alert(combo);
alert(direccion);

if(!(/^[0-9a-zA-Z #-]+$/.test(direccion)) 
||direccion.length>=50||direccion==null||direccion.length==0 ){
    alert("direccion invalida");
    
}


if(combo==null||combo==0){
    alert("seleccione una opcion");
}



}



/*
var s=function(){
    return traerDeB.nombre;
}

var t=function(){
    return traerDeB.lenguajes().nombre;
}

var u=function(){
    let traer=traerDeB.array();
    for(var i =0;i<traer.length;i++){
        console.log(traer[i].nombre);
    }
}

//var campo1=document.getElementById("nombre").value;
var campo1="ggggggg455555";
//var campo2=document.getElementById("numero2").value;
var suma=function(){
return traerDeB.sumar(3,3);
}

var validarNombre=function(){
    console.log(traerDeB.validarNom(campo1));
}

var validarCon=function(){
    console.log(traerDeB.validarContra("asdr3456"));
}

var validarPregunta=function(){
    console.log(traerDeB.validarPreg("hhhhhaaa"));
}

var validarRespuesta=function(){
    console.log(traerDeB.validarRes("asdr3456"));
}

console.log('hola');
console.log(s());
console.log(t());
console.log(u());
console.log(suma());
console.log(validarNombre());
console.log(validarCon());
console.log(validarPregunta());
console.log(validarRespuesta());*/