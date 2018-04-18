window.onload = function() {

  var bant = document.getElementById("bant");
  var bsig = document.getElementById("bsig");
  var bpp = document.getElementById("bpp");
  var bint = document.getElementById("bint");
  var bimg = document.getElementById("bimg");

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

  ////////////////////////////////////////////////////////////

  muestraPrimera();

  bsig.onclick = sigImagen;
  bant.onclick = antImagen;


}
