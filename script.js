window.addEventListener("scroll", function() {
document.querySelectorAll('.fade').forEach(el => {
if (el.getBoundingClientRect().top < window.innerHeight - 50) {
el.classList.add('show');
}
});
});

function scrollToSection(id) {
document.getElementById(id).scrollIntoView({
behavior: "smooth"
});
}

function zoomImg(img) {
document.getElementById("modal").style.display = "flex";
document.getElementById("imgZoom").src = img.src;
}

function fecharZoom() {
document.getElementById("modal").style.display = "none";
}

// Upload de imagem
const upload = document.getElementById("upload");
const galeria = document.getElementById("galeriaContainer");

upload.addEventListener("change", function() {
const file = this.files[0];
if (file) {
const reader = new FileReader();
reader.onload = function(e) {
const img = document.createElement("img");
img.src = e.target.result;
img.onclick = function() { zoomImg(img); };
galeria.appendChild(img);
};
reader.readAsDataURL(file);
}
});

// contador
function animateValue(id, end) {
let start = 0;
let interval = setInterval(() => {
start++;
document.getElementById(id).innerText = start + "%";
if (start >= end) clearInterval(interval);
}, 15);
}

window.onload = () => {
animateValue("num1", 95);
animateValue("num2", 90);
animateValue("num3", 98);
};
