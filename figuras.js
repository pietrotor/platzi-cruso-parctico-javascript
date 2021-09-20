// // Código del cuadrado
// console.group("Cuadrados")
// const ladoCuadrado = 5;
// // console.log("Los lados del cuadro miden: "+ladoCuadrado + " cms");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es: "+perimetroCuadrado+ " cms");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado es: "+areaCuadrado+ " cm^2");
// console.groupEnd();

// // Código del triángulo
// console.group("Triangulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(
//     "Los lados de mi triangulo miden: "+ ladoTriangulo1 + "cm, "
//     + ladoTriangulo2 + "cm, "+baseTriangulo + "cm"
// );
// console.log("La altura del triangulo es de: "+alturaTriangulo + "cms");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cms");

// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
// console.log("El area del triangulo es: " + areaTriangulo + "cms^2");

// console.groupEnd();

// // Código Circulo

// console.group("Circulo");

// // Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es de: "+radioCirculo + "cms");

// // Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es de: "+diametroCirculo + "cms");

// PI
const PI = Math.PI;
// console.log("Pi es: "+PI);

// // Circunferencia
// const perimetroCirculo = 2 * PI * radioCirculo;
// console.log("El perimetro del circulo es de: "+perimetroCirculo + "cms");
// // Área
// const areaCirculo = (radioCirculo * radioCirculo)*PI;
// console.log("El area del circulo es de: "+areaCirculo + "cms^2");

// console.groupEnd();

// Funciones

// Cuadrados
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}


//Triangulos
function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}
function areaTriangulo(lado1, lado2, base){
    let altura = Math.sqrt(lado1*lado2 - (base*base)/2)
    return (base * altura)/2;
}


// Circulos
function areaCirculo(radio){
    return PI*radio*radio;
}
function perimetroCirculo(radio){
    return 2*PI*radio;
}