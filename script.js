function createHex() {
  var hexCode1 = "";
  var hexValues1 = "0123456789abcdef";

  for (var i = 0; i < 6; i++) {
    hexCode1 += hexValues1.charAt(
      Math.floor(Math.random() * hexValues1.length)
    );
  }
  return hexCode1;
}
//
function generate() {
  var deg = Math.floor(Math.random() * 360);
  let hex1 = createHex();
  let hex2 = createHex();

  var gradient =
    "linear-gradient(" + deg + "deg, " + "#" + hex1 + ", " + "#" + hex2 + ")";

  document.getElementById("bg").style.background = gradient;
  let color1 = "#" + hex1;
  let color2 = "#" + hex2;
  document.getElementById("colorInput1").value = color1;
  document.getElementById("colorInput2").value = color2;
  document.getElementById("firstColor").textContent = color1;
  document.getElementById("secondColor").textContent = color2;
}
document.onload = generate();
