window.onload = function() {

let imagens = document.querySelectorAll(".galeria img");
let index = 0;

const modal = document.getElementById("modal");
const imgZoom = document.getElementById("imgZoom");

// abrir zoom
imagens.forEach((img, i) => {
img.addEventListener("click", () => {
index = i;
modal.style.display = "flex";
imgZoom.src = img.src;
});
});

// fechar
document.querySelector(".fechar").onclick = () => {
modal.style.display = "none";
};

// trocar
document.querySelector(".prev").onclick = () => {
index = (index - 1 + imagens.length) % imagens.length;
imgZoom.src = imagens[index].src;
};

document.querySelector(".next").onclick = () => {
index = (index + 1) % imagens.length;
imgZoom.src = imagens[index].src;
};

// upload
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
      index = imagens.length - 1;
      modal.style.display = "flex";
      imgZoom.src = img.src;
    });

    galeria.appendChild(img);
    imagens = document.querySelectorAll(".galeria img");
  };
  reader.readAsDataURL(file);
}
```

});

};
