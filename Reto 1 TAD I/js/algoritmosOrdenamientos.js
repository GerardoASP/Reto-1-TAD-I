function algoritmoBurbuja(arr, dir=1) {
    var noSwaps = true;
  for(var i=arr.length; i>0; i--){
    for(var j=0; j<i-1; j++){
      if(dir===1){
        if(arr[j]>arr[j+1]){
          var temp=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=temp;
          noSwaps=false;
        }
      }else{
        if(arr[j]<arr[j+1]){
          var temp=arr[j];
          arr[j]=arr[j+1];
          arr[j+1]=temp;
          noSwaps=false;
        }
      }
    }
    if(noSwaps)
      break;
  }
  return arr;
}

function algoritmoSeleccion(arr, dir=1) {
  const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  
  for (let i = 0; i < arr.length; i++){
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++){
      if(dir===1){
        if (arr[lowest] > arr[j]){
          lowest = j;
        }
      }else{
        if (arr[lowest] < arr[j]){
          lowest = j;
        }
      }
    }
    if (i !== lowest)
      swap(arr, i, lowest);
  }
  return arr;
}

function algoritmoInsercion(arr, dir=1) {
  var currentVal;
  for(var i = 1; i < arr.length; i++){
    currentVal = arr[i];
    for(var j = i - 1; j >= 0 && (dir===1)? arr[j] > currentVal:arr[j] < currentVal; j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  return arr;
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

