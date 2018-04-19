window.onload = function() {

  var bant = document.getElementById("bant");
  var bsig = document.getElementById("bsig");
  var bpp = document.getElementById("bpp");
  var nint = document.getElementById("bint");
  var nimg = document.getElementById("bimg");

  var elementos = document.getElementsByTagName("img");

  var i=0;

  //Funciones

  function ocultaImg(){

    for(a=0; a<elementos.length; a++){

      elementos[a].style.visibility = "hidden";
    }

    console.log("ocultaImg");

  }

  function muestraPrimera(){

    ocultaImg();

    elementos[0].style.visibility = "visible";

    console.log("muestraPrimera");
  }

  function sigImagen(){

    elementos[i].style.visibility = "hidden";

    if(i+1 > elementos.length-1)
      i=0;
    else
      i++;

    elementos[i].style.visibility = "visible";

    console.log("sigImagen");

  }

  function antImagen(){

    elementos[i].style.visibility = "hidden";

    if(i-1 < 0)
      i=elementos.length-1;
    else
        i--;

      elementos[i].style.visibility = "visible";
  }

  function setNumImg(){
    nimg.readOnly = true;
    nimg.value = elementos.length + " imagenes";
  }

  function setNumInt(){
    nint.vale = intervalo.seconds;
  }

  function playPause(){

    if(intervalo==false)
      intervalo = setInterval(sigImagen, t_int);

    else{
      clearInterval(intervalo);

      intervalo = false;
    }

  }

  function cambiarInt(){

    bpp.click();

    t_int = nint.value;

    bpp.click();

  }

  ////////////////////////////////////////////////////////////
  var intervalo;
  var t_int = 3000;
  intervalo = false;

  bsig.onclick = sigImagen;
  bant.onclick = antImagen;
  bpp.onclick = playPause;

  nint.value = t_int;

  nint.onchange = cambiarInt;

  muestraPrimera();
  setNumImg();
  setNumInt();
  bpp.click();


}
