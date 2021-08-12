const librosGuardados = [];

while (librosGuardados != "no") {
    let entrada = prompt("Ingrese sus libros");
    librosGuardados.push(entrada.toUpperCase());
    console.log(librosGuardados.length);

    alert("Productos: " + librosGuardados);
}