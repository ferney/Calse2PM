let area = function (largo, ancho) {
    let rectanguloarea = largo * ancho;
    console.log("El área del rectángulo es ' + rectanguloarea + 'unidad cuadrada');
}
    
// Función perimetro
let perimetro = function (largo, ancho) {
    let rectanguloperimetro = 2 * (largo + ancho);
    console.log('El perímetro del rectángulo es' + rectanguloperimetro + 'unidad(es)');
}
 
// Exportamos las funciones 
module.exports = {
    area,
    perimetro
}