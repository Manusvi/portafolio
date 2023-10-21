const galeria = {
    animal: ["img/animal-1.jpeg", "img/animal-2.jpeg",],
    paisaje: ["img/paisaje-1.jpeg", "img/paisaje-2.jpeg", "img/paisaje-3.jpeg"],
    familia: ["img/familia-1.jpeg", "img/familia-2.jpeg", "img/familia-3.jpeg"],
    retrato: ["img/retrato-1.jpeg", "img/retrato-2.jpeg", "img/retrato-3.jpeg"],
};

let galeriaAbierta = null;


function mostrarGaleria(categoria) {
    // Cerrar la galería anterior
    if (galeriaAbierta) {
        galeriaAbierta.style.display = "none";
    }

    const galeriaDiv = document.getElementById(categoria);
    galeriaDiv.innerHTML = ""; // Limpiar la galería antes de mostrar nuevas imágenes

    galeria[categoria].forEach((imagen) => {
        const linkElement = document.createElement("a");
        linkElement.href = imagen; // Agregar el enlace al archivo de imagen
        linkElement.target = "_blank"; // Abrir en una nueva pestaña
        linkElement.setAttribute("data-lightbox", "models"); // Agregar la clase data-lightbox

        const imgElement = document.createElement("img");
        imgElement.src = imagen;
        imgElement.alt = categoria;
        imgElement.className = "imagenGaleria"; // Agregar la clase imagenGaleria a la imagen

        linkElement.appendChild(imgElement);
        galeriaDiv.appendChild(linkElement);
    });

    galeriaDiv.style.display = "flex"; // Mostrar la nueva galería
    galeriaAbierta = galeriaDiv; // Actualizar la referencia a la galería abierta
}