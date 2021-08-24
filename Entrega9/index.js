let biblioteca = [
    {
        "Nombre_del_libro": "Dracula",
        "Nombre_del_autor": "Bram Stoker",
        "Numero_de_paginas": 418,
        "Editorial": "ALMA EUROPA",
        "Genero": "Terror"
    },

    {
        "Nombre_del_libro": "La divina comedia",
        "Nombre_del_autor": "Dante Aligheri",
        "Numero_de_paginas": 536,
        "Editorial": "Océano exprés",
        "Genero": "Epopeya"
    }

]

const valores = () =>{
    let inpuLibro = document.getElementById('NomLibro').value;
    console.log(inpuLibro)
    biblioteca.push({Nobre_del_libro: `${inpuLibro}` })
    console.log(biblioteca)
}

const libros = biblioteca.map(function (bar) {
    return "Nombre del libro:" + bar.Nombre_del_libro + '' + '<br>' + 'Nombre del Autor:' + bar.Nombre_del_autor + '' + '<br>' + '<br>'
});
document.getElementById("libros").innerHTML = libros;



