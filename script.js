window.onload = function(){

// LOGIN
document.getElementById("entrar").onclick = function(){

```
document.getElementById("loginScreen").style.display = "none";

document.getElementById("site").style.display = "block";
```

};

// GEOLOCALIZAÇÃO
if(navigator.geolocation){

```
navigator.geolocation.getCurrentPosition(function(pos){

  document.getElementById("cidade").innerText = "Sua Região";

  let temp = Math.floor(Math.random()*10)+22;

  let umi = Math.floor(Math.random()*30)+60;

  document.getElementById("temperatura").innerText = temp + "°C";

  document.getElementById("umidade").innerText = umi + "%";

});
```

}

// ZOOM
let imagens = document.querySelectorAll(".galeria img");

let index = 0;

const modal = document.getElementById("modal");

const imgZoom = document.getElementById("imgZoom");

imagens.forEach((img,i)=>{

```
img.onclick = ()=>{

  index = i;

  modal.style.display = "flex";

  imgZoom.src = imagens[index].src;

};
```

});

document.querySelector(".fechar").onclick = ()=>{

```
modal.style.display = "none";
```

};

document.querySelector(".next").onclick = ()=>{

```
index++;

if(index >= imagens.length){
  index = 0;
}

imgZoom.src = imagens[index].src;
```

};

document.querySelector(".prev").onclick = ()=>{

```
index--;

if(index < 0){
  index = imagens.length - 1;
}

imgZoom.src = imagens[index].src;
```

};

};
