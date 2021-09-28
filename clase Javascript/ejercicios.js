undefinide



/*//crear primer arreglo
var platos=["ceviche","tacos","pasta","bandeja"];
var bebidas=new Array("te","soda","pozol","masato");
console.log(Array.isArray(platos),bebidas,platos);
//medir y acceder
console.log("hay "+platos.length+ " platos en el menú");
var plat=platos[platos.length-1];
console.log("se seleccionó "+plat);
//arreglos dimensionales

var platos=["ceviche","tacos","pasta","bandeja"];
var paises=["peru","mexico","italia","colombia"];
var menu=[platos,paises];
console.log(menu[1][0]+" "+menu[0][0]);

//operaciones basicas

var platos=["ceviche","tacos","pasta","bandeja"];
console.log('Antes:',platos);
platos.push("tostadas");
platos.push("queso");
console.log('Despues:',platos);
platos.pop();
platos.pop();
console.log('Mucho Despues:',platos);
var mensaje=platos.join();
console.log(mensaje);

//uso de split, from, of
var s="este es un array";
var texto=s.split(" ");
console.log(texto);
//var as=document.querySelectorAll();
bebidas=Array.from(document.querySelectorAll('.xyz p'));
console.log(bebidas);
var bebidas2=bebidas.map(bebidas=>bebidas.textConten);
console.log(bebidas2);

//ordenar arreglos
var platos=["ceviche","tacos","pasta","bandeja"];
console.log('Antes:',platos);
platos.sort();
console.log('Despues:',platos);
platos.reverse();
console.log('mas Despues:',platos);

//desestructurar arrrays
var platos=["ceviche","tacos","pasta","bandeja"];
var a=platos[0];
var b=platos[1];
var c=platos[2];
var d=platos[3];

console.log(a,b,c,d);

var [x1,x2,x3,x4]=platos;
console.log(x1,x2,x3,x4);

//iterar foreach
var platos=["ceviche","tacos","pasta","bandeja"];
platos.forEach((a,i)=>console.log(i,a));
//buscar dentro de un array alguna igualdas
var elegido=platos.find(a=>a=="pasta");
console.log(elegido);

var menu=[
  {nombre:'ceviche',precio:20000,pais:'peru'},
  {nombre:'tacos',precio:25000,pais:'mexio'},
  {nombre:'pasta',precio:35000,pais:'italia'},
  {nombre:'bandeja',precio:30000,pais:'colombia'}
];

var e=menu.find(a=>a.nombre=="pasta");
console.log(e);*/

//busqueda de indices de un elemento

var menu=[
  {nombre:'ceviche',precio:20000,pais:'peru'},
  {nombre:'tacos',precio:25000,pais:'mexio'},
  {nombre:'pasta',precio:35000,pais:'italia'},
  {nombre:'bandeja',precio:30000,pais:'colombia'}
];
var e=null;
e=menu.findIndex(a=>a.nombre=="pasta");
console.log('el plato con pasta es el nuemro: '+(e+1));



