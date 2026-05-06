function abrirZoom(img) {
document.getElementById("modal").style.display = "flex";
document.getElementById("imgZoom").src = img.src;
}

function fecharZoom() {
document.getElementById("modal").style.display = "none";
}
