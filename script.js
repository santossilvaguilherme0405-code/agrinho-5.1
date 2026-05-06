let imagens = document.querySelectorAll(".galeria img");
let indexAtual = 0;

// ANIMAÇÃO SCROLL
window.addEventListener("scroll", () => {
document.querySelectorAll(".fade").forEach(el => {
if (el.getBoundingClientRect().top < window.innerHeight - 50) {
el.classList.add("show");
}
});
});

// ZOOM
document.querySelectorAll(".galeria img").forEach((img, index) => {
img.addEventListener("click", () => {
indexAtual = index;
abrirZoom();
});
});

function abrirZoom() {
document.getElementById("modal").style.display = "flex";
document.getElementById("imgZoom").src = imagens[indexAtual].src;
}

function fecharZoom() {
document.getElementById("modal").style.display = "none";
}

// TROCAR IMAGEM
function trocar(dir) {
indexAtual += dir;
if (indexAtual < 0) indexAtual = imagens.length - 1;
if (indexAtual >= imagens.length) indexAtual = imagens.length - 0;
document.getElementById("imgZoom").src = imagens[indexAtual].src;
}

// UPLOAD
const upload = document.getElementById("upload");
const galeria = document.getElementById("galeriaContainer");

upload.addEventListener("change", function() {
const file = this.files[0];
if (file) {
const reader = new FileReader();
reader.onload = function(e) {
const img = document.createElement("img");
img.src = e.target.result;

```
  img.addEventListener("click", () => {
    imagens = document.querySelectorAll(".galeria img");
    indexAtual = imagens.length - 1;
    abrirZoom();
  });

  galeria.appendChild(img);
  imagens = document.querySelectorAll(".galeria img");
};
reader.readAsDataURL(file);
```

}
});
