//este es un comentario de 1 linea
/*document.write("algo tambien");
alert("hola mundo");
window.alert("otro hola mundo");
window.confirm("algo");
var nombre=prompt("su nombre es?");
alert("bienvenido "+nombre);*/

var nombre="carlos vvvfddrrr";
var x;
x=10;
var tempera=35.7;
var bool=true;

var x=10,y="veronica",z=true;
var numero=[1,2,3,4,5,6,7,8,9,0];
//document.write(numero[6]);
console.log(numero[6]);

var frutas=["manzana", "guayaba", "guava", "aguacate","pera"];

var s=2,ss=4,r=s%ss;
//alert(r);

s--;
s--;
s--;
//alert(s);
//document.write(s>ss || ss<s);

var edad=17;

if(edad>=18){
//document.write("puedes tomar");
}else{
//document.write("no puedes tomar");
}

//edad>=18? alert("puedes tomar"): alert("no puedes tomar");
var frut="guava";
for(var i=0;i<frutas.length;i++){
    //if(frut==frutas[i]){
        //document.write(" bingo <br>");
        i++;
        }
        //document.write(frutas[i]+"<br>");


for(var i in frutas){
   // alert(frutas[i]);
}

frutas.forEach(element => {
    //alert(element);
});

var fr =frutas.find(element => {
    //alert(element);
});

var fr2 =frutas.map(element => {
    //alert(element);
});

var fr2 =frutas.filter(element => {
    //alert(element);
});



/*while(edad<18){
    document.write("no puedes tomar");
    edad++;
}

var edad2=15;

do{
    document.write("no puedes tomar <br>");
    edad2++;
}while(edad2<18);

var edad2=prompt("ingrese edad");
switch(edad2>0){
    case edad2<10:
        document.write("menod e 10 años");
        break;
    case edad2>=10 && edad2 <15:
        document.write("menor de 15 años");
        break;
    case edad2>=15 && edad2 <18:
        document.write("no puedes tomar");
        break;
    case edad2>=18 && edad2<100:
        document.write("menod e 10 años");
        break;
    default:
        document.write("sin ingresar datos");
}

function saludo(){
    for(var i=0;i<5;i++){
    document.write(i);}
}

saludo();

function parametro(nombre, nombre1, nombre2){
    var a=nombre;
    var b=nombre1;
    var c=nombre2;
    document.write(a,b,c);
}

parametro("daniel", "claudi", "marcela");

function parametro(nombre, nombre1, nombre2){
    var a=nombre;
    var b=nombre1;
    var c=nombre2;
    var x=a+", "+b+", "+c;
    return(x);
}
var dato=parametro("daniel", "claudi", "marcela");
document.write(dato);*/

function objeto(nom1,nom2,nom3){
    this.atributi1=nom1;
    this.atributi2=nom2;
    this.atributi3=nom3;
}

var objetoX=new objeto("tatiana", "jorge", "andres");

document.write(objetoX.atributi1,objetoX.atributi2,objetoX.atributi3,);

var objetoY=new objeto("a","b","c");
document.write(objetoY.atributi1,objetoY.atributi2,objetoY.atributi3,);
var objetoZ=new objeto();