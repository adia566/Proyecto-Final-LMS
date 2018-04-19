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

  if(i+1 > elementos.length-1){
    i=0;
  } else{
    i++;
  }

  elementos[i].style.visibility = "visible";
  setNumImg();
}

function antImagen(){
  elementos[i].style.visibility = "hidden";

  if(i-1 < 0){
    i=elementos.length-1;
  } else{
      i--;
  }

  elementos[i].style.visibility = "visible";
  setNumImg();
}

function setNumImg(){
  nimg.readOnly = true;
  nimg.value = i+1 + " de " + elementos.length;
}

function playPause(){
  if(intervalo==false){
    bpp.innerHTML = "Pausa";

    intervalo = setInterval(sigImagen, t_int);
  }else{
    bpp.innerHTML = "Play";

    clearInterval(intervalo);
    intervalo = false;
  }
}

function cambiarInt(){
  bpp.click();

  t_int = nint.value;

  bpp.click();
}


//Inicio.
window.onload = function() {
  elementos = document.getElementsByTagName("img");

  i=0;
  t_int = 2000;
  intervalo = false;

  bant = document.createElement("buttom");
  bsig = document.createElement("buttom");
  bpp = document.createElement("buttom");
  nint = document.createElement("input");
  nimg = document.createElement("input");

  var contenido = document.createTextNode("Anterior");
  bant.appendChild(contenido);

  contenido = document.createTextNode("Siguiente");
  bsig.appendChild(contenido);

  contenido = document.createTextNode("Pausa");
  bpp.appendChild(contenido);

  contenido = document.createTextNode("");
  nint.appendChild(contenido);

  contenido = document.createTextNode(elementos.length);
  nimg.appendChild(contenido);

  document.body.appendChild(bant);
  document.body.appendChild(bsig);
  document.body.appendChild(bpp);
  document.body.appendChild(nint);
  document.body.appendChild(nimg);

  nint.value = t_int;

  bsig.onclick = sigImagen;
  bant.onclick = antImagen;
  bpp.onclick = playPause;
  nint.onchange = cambiarInt;

  muestraPrimera();
  bpp.click();
}
