// Aquí tu código
// creamos las variables uno busca el botón y el otro la lista
const botonAgregar = document.getElementById("agregar");
const lista = document.getElementById("lista");

//añadimos un listner para darle clic al boton para introducir datos
botonAgregar.addEventListener("click", function () {
    const nuevoElemento = prompt("Introduce aqui tus datos:");
    //comprobamos que el usuario haya escrito algo y si ha escrito texto y no solo espacios
    if (nuevoElemento && nuevoElemento.trim() !== '') {
        //creamos una lista con los datos introducidos
        const list = document.createElement("li");
        list.textContent = nuevoElemento; //metemos el texto a la lista
        lista.appendChild(list); //añadimos el elemento como hijo de la lista que ya exite
    } else {
        alert("No se ha introducido ningún texto.");
    }
});
