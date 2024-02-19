let valuesArray = []

const inputEl = document.getElementById("input");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");
const convertBtn = document.getElementById("convert-btn")


convertBtn.addEventListener("click", function() {
  valuesArray.push(inputEl.value)
  computeLength()
  computeVolume()
  computeMass()
  valuesArray = []
})

function computeLength(){
 let mainValue = ""
 let meter = ""
 let feet = ""

 mainValue = valuesArray[0]
 meter = mainValue * 3.281
 feet = mainValue * 0.304
 
 lengthEl.innerHTML = `
 ${mainValue} meters = ${meter.toFixed(3)} feet | ${mainValue} feet = ${feet.toFixed(3)} meters
 `
}

function computeVolume(){
  let mainValue = ""
  let liter = ""
  let gallon = ""
 
  mainValue = valuesArray[0]
  liter = mainValue * 3.785
  gallon = mainValue * 0.264 
  
  volumeEl.innerHTML = `
  ${mainValue} liters = ${liter.toFixed(3)} gallons | ${mainValue} 
  gallons = ${gallon.toFixed(3)} liters
  `
}

function computeMass(){
  let mainValue = ""
  let liter = ""
  let gallon = ""
 
  mainValue = valuesArray[0]
  kilogram = mainValue * 2.204
  pound = mainValue * 0.453
  
  massEl.innerHTML = `
  ${mainValue} kilograms = ${kilogram.toFixed(3)} pounds | ${mainValue} 
  pounds = ${pound.toFixed(3)} kilograms
  `
}

