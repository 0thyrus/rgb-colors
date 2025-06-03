// RGB Colors

//variables to store HTML elements

let redInEL = document.getElementById("redIn");
let greenInEL = document.getElementById("greenIn");
let blueInEL = document.getElementById("blueIn");
let rgbStingOutEL = document.getElementById("rgbStrOut");
let displayEL = document.getElementById("display");
let widthInEl = document.getElementById("widthIn")
let heightInEl = document.getElementById("heightIn")

// Event Listeners
redInEL.addEventListener("input", rgbPreview);
greenInEL.addEventListener("input", rgbPreview);
blueInEL.addEventListener("input", rgbPreview);

widthInEl.addEventListener("input", sizePreview);
heightInEl.addEventListener("input", sizePreview);


// Event Function
function rgbPreview() {
  // Input: get red green blue values
  let rValue = +redInEL.value;
  let gValue = +greenInEL.value;
  let bValue = +blueInEL.value;

  //validate colors (constrain colors brtween 0 - 255)
  // Check rValue
  if (rValue < 0){
    rValue = 0;
    redInEL.value = 0;
  } else if (rValue > 255){
    rValue = 255;
    redInEL.value = 255
  }

  // Check bValue
   if (gValue < 0){
    gValue = 0;
    greenInEL.value = 0;
  } else if (gValue > 255){
    gValue = 255;
    greenInEL.value = 255
  }
  

  // Check bValue
 if (bValue < 0){
    rValue = 0;
    blueInEL.value = 0;
  } else if (bValue > 255){
    bValue = 255;
    blueInEL.value = 255
  }

  // Process: build rgb string rbg(___, ___, ___)
  let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

  // Output: display rgb string and update the color preview
  rgbStingOutEL.innerHTML = rgbString;
  displayEL.style.background = rgbString;
}

function sizePreview(){

  let heightValue = +heightInEl.value;
  let widthValue = +widthInEl.value;

  if(heightValue < 50){
    heightValue = 50
    heightInEl.value = 50
  } else if(heightValue > 400){
    heightValue = 400
    heightInEl.value = 400
  }

  if(widthValue < 50){
    widthValue = 50
    widthInEl.value = 50
  } else if(widthValue > 400){
    widthValue = 400
    widthInEl.value = 400
  }

  let widthString =  widthValue + "px" ;
  
  displayEL.style.width = widthString
  
  let heightString =  heightValue + "px" ;
  
  displayEL.style.height = heightString
  



}