function algoritmoBurbuja() {
  
}

function algoritmoSeleccion() {

}

function algoritmoInsercion() {
  
}

function showSelected() {
    let seleccion = document.getElementById("algoritmoSeleccionado").value;
    document.getElementById("algSelected").innerHTML = seleccion;
    /* Para obtener el texto que ve el usuario */
    let selected_name = document.getElementById("algoritmoSeleccionado");
    let opcion = selected_name.options[selected_name.selectedIndex].text;
    alert(opcion);
    if (seleccion === "1")
        algoritmoBurbuja();
    else if (seleccion === "2")
        algoritmoInsercion();
    else
        algoritmoSeleccion();

}
let imagenesSeleccionadas = new Array();
function seleccionImagen(imagenesSeleccionadas) {
  /* Capturar un evento de selección por el id del checkbox */
  const img1 = document.getElementById("1").checked;
  const img2 = document.getElementById("2").checked;
  const img3 = document.getElementById("3").checked;
  const img4 = document.getElementById("4").checked;
  const img5 = document.getElementById("5").checked;
  const img6 = document.getElementById("6").checked;

  imagenesSeleccionadas.push(img1, img2, img3, img4, img5, img6);
}
function cambiarConjuntoImages(imagenesSeleccionadas){
  if(document.getElementById("imgSelect").value == 1){
    document.getElementById("img1").src=imagenesSeleccionadas[0];
    document.getElementById("img2").src=imagenesSeleccionadas[1];
    document.getElementById("img3").src=imagenesSeleccionadas[2];
    document.getElementById("img4").src=imagenesSeleccionadas[3];
    document.getElementById("img5").src=imagenesSeleccionadas[4];
    document.getElementById("img6").src=imagenesSeleccionadas[5];
  }else if(document.getElementById("imgSelect").value == 2){
    document.getElementById("8").src=imagenesSeleccionadas2[0];
    document.getElementById("9").src=imagenesSeleccionadas2[1];
    document.getElementById("14").src=imagenesSeleccionadas2[2];
    document.getElementById("12").src=imagenesSeleccionadas2[3];
    document.getElementById("13").src=imagenesSeleccionadas2[4];
    document.getElementById("11").src=imagenesSeleccionadas2[5];
  }else if(document.getElementById("imgSelect").value == 3){
    document.getElementById("45").src=imagenesSeleccionadas3[0];
    document.getElementById("50").src=imagenesSeleccionadas3[1];
    document.getElementById("30").src=imagenesSeleccionadas3[2];
    document.getElementById("23").src=imagenesSeleccionadas3[3];
    document.getElementById("25").src=imagenesSeleccionadas3[4];
    document.getElementById("35").src=imagenesSeleccionadas3[5];
  }
}