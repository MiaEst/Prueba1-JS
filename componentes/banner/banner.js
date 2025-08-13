export function banner() {
    let div = document.createElement("div");
    div.className = "div-banner";

    let span = document.createElement("span");
    spa.textContent = "Geeta.";
    div.appendChild(span);

    let divBoton = document.createElement("div");
    divBoton.className = "div-boton";
    divBoton.textContent = "SHOP NOW";
    divBoton.appendChild(div);

    return div; 
}