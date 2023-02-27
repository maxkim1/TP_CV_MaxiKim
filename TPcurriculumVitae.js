/* Mostrar u ocultar datos personales */
document.getElementById("boton_informacion").onclick = function () {
    let texto_boton = document.getElementById("boton_informacion").innerText;
    if (texto_boton === "Mostrar") {
        document.getElementById("boton_informacion").innerText = "Ocultar";
        const coleccion = document.getElementsByClassName("informacion");
        for (let i = 0; i < coleccion.length; i++) {coleccion[i].style.display = "block";}
    } else { if (texto_boton === "Ocultar") {  
        document.getElementById("boton_informacion").innerText = "Mostrar";
        const coleccion = document.getElementsByClassName("informacion");
        for (let i = 0; i < coleccion.length; i++) {coleccion[i].style.display = "none";}
    }}   
}

/* Mostrar u ocultar experiencia */
document.getElementById("boton_experiencia").onclick = function () {
    let texto_boton = document.getElementById("boton_experiencia").innerText;
    if (texto_boton === "Mostrar") {
        document.getElementById("boton_experiencia").innerText = "Ocultar";
        const coleccion = document.getElementsByClassName("experiencia");
        for (let i = 0; i < coleccion.length; i++) {coleccion[i].style.display = "block";}
    } else { if (texto_boton === "Ocultar") {  
        document.getElementById("boton_experiencia").innerText = "Mostrar";
        const coleccion = document.getElementsByClassName("experiencia");
        for (let i = 0; i < coleccion.length; i++) {coleccion[i].style.display = "none";}
    }} 
}

/* Mostrar u ocultar habilidades */
document.getElementById("boton_habilidades").onclick = function () {
    let texto_boton = document.getElementById("boton_habilidades").innerText;
    if (texto_boton === "Mostrar") {
        document.getElementById("boton_habilidades").innerText = "Ocultar";
        const coleccion = document.getElementsByClassName("habilidades");
        for (let i = 0; i < coleccion.length; i++) {coleccion[i].style.display = "block";}
    } else { if (texto_boton === "Ocultar") {  
        document.getElementById("boton_habilidades").innerText = "Mostrar";
        const coleccion = document.getElementsByClassName("habilidades");
        for (let i = 0; i < coleccion.length; i++) {coleccion[i].style.display = "none";}
    }} 
}