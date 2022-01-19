/*
    Ejercicio 2 – Sumando los valores de un arreglo

*/

let arr = [12,15,18,25,30];

// sumando arreglo

let suma = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];

// sumando arreglo 2

let suma = 0;

for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
}

// sumando arreglo 3

const reducer = (prev, curr) => prev + curr;

let suma = arr.reduce(reducer);

