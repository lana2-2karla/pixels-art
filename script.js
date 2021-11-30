function creatPixels() {
  let divMotherPixel = document.getElementById("pixel-board");
    
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
