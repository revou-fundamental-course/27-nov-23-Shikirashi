function setColorScheme(scheme) {
  switch(scheme){
    case 'dark':
      document.documentElement.style.cssText = "--bgcolor: #333333;";
      break;
    case 'light':
      document.documentElement.style.cssText = "--bgcolor: #4d88e8";
      break;
    default:
      break;
  }
}

function getPreferredColorScheme() {
  if (window.matchMedia) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      return 'dark';
    } else {
      return 'light';
    }
  }
  return 'light';
}

function updateColorScheme(){
    setColorScheme(getPreferredColorScheme());
}

if(window.matchMedia){
  var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  colorSchemeQuery.addEventListener('change', updateColorScheme);
}

updateColorScheme();

function LuasSegitiga() {
  var a = parseFloat(document.getElementById("alas").value);
  var t = parseFloat(document.getElementById("tinggi").value);
  if (!isNaturalNumber(a)) {
    Warning("Nilai alas tidak valid!");
  } else if (!isNaturalNumber(t)) {
    Warning("Nilai tinggi tidak valid!");
  }
  OutputHasil(0.5 * a * t, true);
}

function ResetForm() {
  document.getElementById("input-form").reset();
  document.getElementById("hasil").innerHTML = "Hasil:";
}

function KelilingSegitiga() {
  var a = parseFloat(document.getElementById("sisi-a").value);
  var b = parseFloat(document.getElementById("sisi-b").value);
  var c = parseFloat(document.getElementById("sisi-c").value);
  if (!isNaturalNumber(a)) {
    Warning("Nilai sisi a tidak valid!");
  } else if (!isNaturalNumber(b)) {
    Warning("Nilai sisi b tidak valid!");
  } else if (!isNaturalNumber(c)) {
    Warning("Nilai sisi c tidak valid!");
  }
  OutputHasil(a + b + c, false);
  console.log(a + b + c);
}

function OutputHasil(hasil, isLuas) {
  if (isLuas) {
    document.getElementById("hasil").innerHTML =
      "Hasil: luas segitiga adalah " + hasil + "cm" + "<sup>2</sup>";
  } else {
    document.getElementById("hasil").innerHTML =
      "Hasil: keliling segitiga adalah " + hasil + "cm";
  }
}

function Warning(msg) {
  window.alert(msg);
  return;
}

function isNaturalNumber(num){
  num = num.toString();
  var num1 = Math.abs(num);
  var num2 = parseInt(num, 10);
  return !isNaN(num1) && num2 === num1 && num1.toString() === num;
}
