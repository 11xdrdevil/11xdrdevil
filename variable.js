// Get the root element
var r = document.querySelector(':root');
    
setInterval(()=>{
    myFunction_SetColourAsElementColour()
}, 200);

function myFunction_SetColourAsElementColour() {
  let color = document.getElementById('colourPicker').value;
  r.style.setProperty('--themeColor', color);
}