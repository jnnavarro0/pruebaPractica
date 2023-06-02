// 1. Crea una variable llamada "nombre" y asígnale tu nombre como valor.

let nombre = "Johny";
console.log(nombre);

// 2. Crea una función llamada "suma" que reciba dos parámetros (a y b) y retorne la suma de ambos.

function suma(a, b){
	return a + b;
}

console.log(suma(5, 4));

// 3. Escribe un condicional que verifique si una persona es mayor de edad. Si es mayor de edad, imprime "Es mayor de edad", de lo contrario, imprime "Es menor de edad".

edad = 23;

if(edad >= 18)
console.log("Es mayor de edad");
else
console.log("Es menor de edad");

// 4. Crea un ciclo "for" que imprima los números del 1 al 5.

for(i = 1; i <= 5; i++){
    console.log(i);

}  

// 5. Crea una función llamada "imprimirArray" que reciba como parámetro un array y lo imprima elemento por elemento. Respuesta:

let paises = ["Ecuador", "Colombia", "Venezuela", "Perú", "Argentina", "Chile", "Brasil"];

function imprimirArray(paises){
    for(i = 0; i < paises.length; i++){
        console.log(paises[i]);
    }
}

imprimirArray(paises);

// 6. ¿Cuánto es 2 + 2? Respuesta: 4

n1 = 2;
n2 = 2;

console.log("Respuesta: " + (n1 + n2));


// 11.	Crea una función llamada "primerElementoArray" que reciba como parámetro un array y retorne el primer elemento.

let frutas = ["Manzana", "Pera", "Saldia", "Melon", "Papaya"];

function primerElementoArray(frutas){
    console.log(frutas[0]);
}

primerElementoArray(frutas);

// 12. Crea una función llamada "imprimirElementosArray" que reciba como parámetro un array y lo imprima usando un ciclo "for".

let provincias = ["Pichincha", "Manabi", "Guayas", "El oro", "Pastaza"];

function imprimirElementosArray(provincias){
    for(i = 0; i < provincias.length; i++){
        console.log(provincias[i]);
    }
}

imprimirElementosArray(provincias);
