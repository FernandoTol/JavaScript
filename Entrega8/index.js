function libreria(name, autor, editorial, category) {
    this.name = name;
    this.autor = autor;
    this.editorial = editorial;
    this.category = category;
};


let saludo = prompt("Desea agregar libros? si / no");


while (saludo != "no") {
    let inputName = prompt("ingrese el nombre del libro");
    let inputAutor = prompt("ingrese el autor");
    let inputEditorial = prompt("ingrese la editorial");
    let InputCategory = prompt("ingrese la categoria");
    const persona1 = new libreria(inputName, inputAutor, inputEditorial, InputCategory);

    alert(`usted lleva los libros de: ${persona1["name"]}`);

    saludo = prompt('Desea agregar libros? si/no')
}
