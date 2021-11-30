let divMotherPixel = document.getElementById("pixel-board");
  
function creatPixels() {
  for (let i = 0; i < 25; i += 1) {
    let divPixels = document.createElement("div");
    divPixels.className = "pixel";
    divMotherPixel.appendChild(divPixels);
  } 
}
creatPixels();


let divMotherPalette = document.getElementById("color-palette");
divMotherPalette.addEventListener("click", addSelected);


function addSelected(event) {
  let classSelected = document.querySelector(".selected");
  if (classSelected && event.target !== divMotherPalette) {
    classSelected.classList.remove("selected");
  }
  if (event.target !== divMotherPalette) {
    event.target.classList.add("selected");
  }  
}

divMotherPixel.addEventListener("click", paintPixel);

function paintPixel (event) {
  //classSelected extrai a classe que contenha a cor selecionada!!
  let classSelected = document.querySelector(".selected");
  if (classSelected) {
   let selectedColor  = classSelected.classList[1];
   
   event.target.classList.add(selectedColor);

  }
}