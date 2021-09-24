function validar(){
var a=document.getElementById("nombre").value;
var b=document.getElementById("edad").value;
var c=document.getElementById("pwr").value;
var d=document.getElementById("email").value;
var dd=document.getElementById("dir").value;
var e=document.getElementsByName("se").value;
var seleccionado = false;

/*validacion de nombre
if(a==null||a.length>=8||a.length<=12||/^\s+$/.test(a)){
    alert("este campo no debe estar vacio");
    }

//validacion de edad
if(b==null||b.length==0||isNaN(b)){
    alert("numero campo no debe estar vacio");
    
}

//validacion de contraseña
if(!(/^[0-9a-zA-Z]+$/.test(c))){
    alert("contraseña invalida");
    
}

//validacion de correo
if(!(/\S+@\S+\.\S+/.test(d))){
    alert("correo invalida");
    
}

//validacion de correo  aaa44#- <=50 np vacio
if(!(/^[0-9a-zA-Z #-]+$/.test(dd)) ||dd.length>=50||dd==null||dd.length==0 ){
    alert("direccion invalida");
    
}*/

//validacion de radiobutton
for(var i=0;i<e.length;i++){
if(e[i].checked){
    seleccionado = true; 
    break; 
}
}
if(!seleccionado){
    alert(" no seleccionado");
    
}




}

/*opciones = document.getElementsByName("opciones");
 var seleccionado = false; for(var i=0; i<opciones.length; i++) { if(opciones[i].checked) 
    { seleccionado = true; break; } } if(!seleccionado) { return false; } */