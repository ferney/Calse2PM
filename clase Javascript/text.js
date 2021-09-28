var arregloDeObjetos=[];
function guardar(){  
  
  function usuario(nombre,apellido,telefono,correo,contrasena){
    this.nombre=nombre;
    this.apellido=apellido;
    this.telefono=telefono;
    this.correo=correo;
    this.contrasena=contrasena;    
  }
  
  var a=document.getElementById('nombre').value;
  var b=document.getElementById('apellido').value;
  var c=document.getElementById('telefono').value;
  var d=document.getElementById('correo').value;
  var e=document.getElementById('contrasena').value;
  
  nuevoUsuario= new usuario(a,b,c,d,e);
  insertar();  
}

function insertar(){
  arregloDeObjetos.push(nuevoUsuario);
  document.getElementById('tabla')
  .innerHTML+='<tr><td>'+nuevoUsuario.nombre+'</td><td>'+
  nuevoUsuario.apellido+'</td><td>'+nuevoUsuario.telefono
  +'</td><td>'+nuevoUsuario.correo+'</td><td>'+
    nuevoUsuario.contrasena+'</td></tr>';
}