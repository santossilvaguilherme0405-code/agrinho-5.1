window.onload = function(){

let imagens = document.querySelectorAll(".galeria img");

let index = 0;

const modal = document.getElementById("modal");

const imgZoom = document.getElementById("imgZoom");

// CLIQUE NAS IMAGENS
imagens.forEach((img,i)=>{

```
img.onclick = ()=>{

  index = i;

  modal.style.display = "flex";

  imgZoom.src = imagens[index].src;
};
```

});

// FECHAR
document.querySelector(".fechar").onclick = ()=>{

```
modal.style.display = "none";
```

};

// PRÓXIMA
document.querySelector(".next").onclick = ()=>{

```
index++;

if(index >= imagens.length){
  index = 0;
}

imgZoom.src = imagens[index].src;
```

};

// ANTERIOR
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
