/*
    Ejercicio 4: obteniendo correos de usuarios

*/

var users = [
    {
        nombre : "Marco",
        email: "fericell2909@gmail.com",
        edad : 34
    } ,
    {
        nombre : "Elizabeth",
        emial: "ezavaletal14@gmail.com",
        edad : 32
    } ,
    {
        nombre : "Stefano",
        email: "stefano.estrada@gmail.com",
        edad : 8
    } ,
    {
        nombre : "Maria",
        email: "mlozano@gmail.com",
        edad : 62
    } ,
    {
        nombre : "Manuel",
        email: "mbestradas@gmail.com",
        edad : 61
    }
];


var emails = [];

users.forEach( function (element) {
    if(element.hasOwnProperty("email")) {
        emails.push(element.email);
    }
});
