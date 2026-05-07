window.onload = function(){

  let imagens = document.querySelectorAll(".galeria img");

  let index = 0;

  const modal = document.getElementById("modal");

  const imgZoom = document.getElementById("imgZoom");

  imagens.forEach((img,i)=>{

    img.onclick = ()=>{

      index = i;

      modal.style.display = "flex";

      imgZoom.src = imagens[index].src;

    };

  });

  document.querySelector(".fechar").onclick = ()=>{

    modal.style.display = "none";

  };

  document.querySelector(".next").onclick = ()=>{

    index++;

    if(index >= imagens.length){
      index = 0;
    }

    imgZoom.src = imagens[index].src;

  };

  document.querySelector(".prev").onclick = ()=>{

    index--;

    if(index < 0){
      index = imagens.length - 1;
    }

    imgZoom.src = imagens[index].src;

  };

  // CONTADOR

  function animar(id,final){

    let n = 0;

    let el = document.getElementById(id);

    let i = setInterval(()=>{

      n++;

      el.innerText = n + "%";

      if(n >= final){
        clearInterval(i);
      }

    },20);

  }

  animar("n1",95);
  animar("n2",90);
  animar("n3",98);

};
