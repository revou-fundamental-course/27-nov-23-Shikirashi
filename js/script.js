

function LuasSegitiga() {
  var a = document.getElementById("alas").value;
  var t = document.getElementById("tinggi").value;
  if(a == 0 || t == 0){
    window.alert("Nilai alas atau tinggi tidak valid!");
    return;
  }
  var hasil = 0.5 * a * t;
  document.getElementById("hasil").innerHTML = "Hasil: luas segitiga adalah " + hasil + "cm" + '<sup>2</sup>';
  console.log(hasil);
  console.log("Test");
}
