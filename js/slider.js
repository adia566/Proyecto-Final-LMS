// Variables.
var bant;
var bsig;
var bpp;
var nint;
var nimg;

var contenedor;
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
  i=0;

  ocultaImgs();
  setNumImg();

  elementos[i].style.visibility = "visible";

}

function setNumImg(){
  nimg.readOnly = true;
  nimg.value = i+1 + " de " + elementos.length;
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

function creaSlider(contenedor){
  t_int = 3000;
  intervalo = false;

  //Crea un slider para cada elemento con dicha clase que haya en la página.
  for(b=0; b<contenedor.length; b++){

    elementos = contenedor[b].getElementsByTagName("img");

    //Controles
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

    //Estilos de los controles

    bant.style.border = "2px solid black";
    bant.style.padding = "2px";
    bant.style.margin = "5px";
    bant.style.width = "100px"

    bsig.style.border = "2px solid black";
    bsig.style.padding = "2px";
    bsig.style.margin = "5px";

    bpp.style.border = "2px solid black";
    bpp.style.padding = "2px";
    bpp.style.margin = "5px";
    bpp.style.width = "100px";

    nint.style.width = "10%";
    nint.style.border = "2px solid black";
    nint.style.margin = "5px";
    nint.style.padding = "2px";

    nimg.style.width = "10%";
    nimg.style.border = "2px solid black";
    nimg.style.margin = "5px";
    nimg.style.padding = "2px";

    //Eventos de los controles
    bsig.onclick = sigImagen;
    bant.onclick = antImagen;
    bpp.onclick = playPause;
    nint.onchange = cambiarInt;

    //Inicializar el intervalo
    muestraPrimera();
    bpp.click();
  }
}


//Inicio.
window.onload = function() {

  contenedor = document.getElementsByClassName("slider");

  creaSlider(contenedor);
}
