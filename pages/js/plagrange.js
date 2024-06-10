function calculateDerivatives() {
  const xValues = document.getElementById("x").value.split(",").map(Number);
  const yValues = document.getElementById("y").value.split(",").map(Number);
  const point = parseFloat(document.getElementById("point").value);

  if (xValues.length !== yValues.length) {
    Swal.fire({
      title: "Nabil:",
      text: "Jumlah nilai X dan Y harus sama",
      imageUrl: "./img/nabil.png",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
    return;
  }

  if (isNaN(point)) {
    Swal.fire({
      title: "Nabil:",
      text: "Titik tidak ada dalam daftar",
      imageUrl: "./img/nabil.png",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
    return;
  }

  const result = lagrangeInterpolation(xValues, yValues, point);

  document.getElementById("hasil").textContent = result;
}

function lagrangeInterpolation(x, y, xi) {
  let result = 0;

  for (let i = 0; i < x.length; i++) {
    let term = y[i];
    for (let j = 0; j < x.length; j++) {
      if (j !== i) {
        term *= (xi - x[j]) / (x[i] - x[j]);
      }
    }
    result += term;
  }

  return result;
}
