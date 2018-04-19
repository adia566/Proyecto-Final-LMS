// Variables.
var bant;
var bsig;
var bpp;
var nint;
var nimg;

var elementos;

var i;
var intervalo;
var t_int;

//Funciones.
function ocultaImgs(){

  for(a=0; a<elementos.length; a++){
    elementos[a].style.visibility = "hidden";
  }
}

function muestraPrimera(){
  ocultaImgs();

  elementos[0].style.visibility = "visible";
}

function sigImagen(){
  elementos[i].style.visibility = "hidden";

  if(i+1 > elementos.length-1)
    i=0;
  else
    i++;

  elementos[i].style.visibility = "visible";

  setNumImg();
}

function antImagen(){
  elementos[i].style.visibility = "hidden";

  if(i-1 < 0)
    i=elementos.length-1;
  else
      i--;

  elementos[i].style.visibility = "visible";

  setNumImg();
}

function setNumImg(){
  nimg.readOnly = true;

  nimg.value = i+1 + " de " + elementos.length;
}

function playPause(){

  if(intervalo==false){
    intervalo = setInterval(sigImagen, t_int);

    bpp.innerHTML = "Pausa";
  }else{
    clearInterval(intervalo);

    intervalo = false;

    bpp.innerHTML = "Play";
  }
}

function cambiarInt(){
  bpp.click();

  t_int = nint.value;

  bpp.click();
}


//Inicio.
window.onload = function() {
  bant = document.getElementById("bant");
  bsig = document.getElementById("bsig");
  bpp = document.getElementById("bpp");
  nint = document.getElementById("bint");
  nimg = document.getElementById("bimg");

  elementos = document.getElementsByTagName("img");

  i=0;
  t_int = 2000;
  intervalo = false;

  setNumImg();
  bant.innerHTML = "Anterior";
  bsig.innerHTML = "Siguiente";
  bpp.innerHTML = "Pausa";
  nint.value = t_int;

  bsig.onclick = sigImagen;
  bant.onclick = antImagen;
  bpp.onclick = playPause;
  nint.onchange = cambiarInt;

  muestraPrimera();
  bpp.click();
}
