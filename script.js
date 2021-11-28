function creatPixels() {
    let divMotherPixel = document.querySelectorAll("pixel-board");
    
   for (let i = 0; i < 25; i =+ 1) {
    let divPixels = document.createElement("div");
    divPixels.className = "pixel";
    divMotherPixel.appendChild(divPixels);
   } 
}
console.log(creatPixels);