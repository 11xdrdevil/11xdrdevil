// Get the root element
var r = document.querySelector(':root');
    
// setInterval(()=>{
//     myFunction_SetColourAsElementColour()
// }, 200);

function myFunction_SetColourAsElementColour(color) {
  // let color = document.getElementById('colourPicker').value;
  r.style.setProperty('--themeColor', color);
}

function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}