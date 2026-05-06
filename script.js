window.onload = function() {

let imagens = document.querySelectorAll(".galeria img");
let index = 0;

const modal = document.getElementById("modal");
const imgZoom = document.getElementById("imgZoom");

function atualizarLista(){
imagens = document.querySelectorAll(".galeria img");
}

imagens.forEach((img,i)=>{
img.onclick = ()=>{
index=i;
modal.style.display="flex";
imgZoom.src=img.src;
};
});

document.querySelector(".fechar").onclick=()=>modal.style.display="none";

document.querySelector(".next").onclick=()=>{
index=(index+1)%imagens.length;
imgZoom.src=imagens[index].src;
};

document.querySelector(".prev").onclick=()=>{
index=(index-1+imagens.length)%imagens.length;
imgZoom.src=imagens[index].src;
};

document.addEventListener("keydown",(e)=>{
if(e.key==="ArrowRight") document.querySelector(".next").click();
if(e.key==="ArrowLeft") document.querySelector(".prev").click();
if(e.key==="Escape") modal.style.display="none";
});

// UPLOAD + DRAG
const upload=document.getElementById("upload");
const galeria=document.getElementById("galeriaContainer");
const drop=document.getElementById("dropArea");

function addImg(src){
const img=document.createElement("img");
img.src=src;
img.onclick=()=>{
atualizarLista();
index=imagens.length-1;
modal.style.display="flex";
imgZoom.src=src;
};
galeria.appendChild(img);
atualizarLista();
}

upload.onchange=function(){
[...this.files].forEach(file=>{
const reader=new FileReader();
reader.onload=e=>addImg(e.target.result);
reader.readAsDataURL(file);
});
};

drop.ondragover=e=>{e.preventDefault();};
drop.ondrop=e=>{
e.preventDefault();
[...e.dataTransfer.files].forEach(file=>{
const reader=new FileReader();
reader.onload=e=>addImg(e.target.result);
reader.readAsDataURL(file);
});
};

// CONTADOR
function animar(id,final){
let n=0;
let el=document.getElementById(id);
let i=setInterval(()=>{
n++;
el.innerText=n+"%";
if(n>=final) clearInterval(i);
},20);
}

animar("n1",95);
animar("n2",90);
animar("n3",98);
};
