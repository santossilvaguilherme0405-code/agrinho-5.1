window.onload = function(){

const entrar = document.getElementById("entrar");

const loginScreen = document.getElementById("loginScreen");

const site = document.getElementById("site");

site.style.display = "none";

entrar.onclick = function(){

  loginScreen.style.display = "none";

  site.style.display = "block";

};

};
