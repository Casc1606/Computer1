let usuario = prompt("Ingrese Usuario");
let contraseña = Number(prompt("Ingrese Contraseña"));

const usuarioReal = "Camilo";
const contraseñaReal = 1234;

if (usuario == usuarioReal && contraseña === contraseñaReal) {
    alert("Datos correctos!, Bienvenido!");
    console.log("Datos correctos, usuario identificado");
    document.write("<h1>Bienvenido!</h1>");
} else {
    alert("Lo sentimos, información incorrecta!");
    console.log("Información incorrecta, potencial intruso!");
    document.write("<h1>Alto ahí rufian!</h1>");
}