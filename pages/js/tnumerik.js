function parseInput(input) {
  return input.split(",").map((value) => parseFloat(value.trim()));
}

function findIndex(value, array) {
  return array.indexOf(parseFloat(value));
}

function forwardDifference(index, xi, fxi) {
  return (fxi[index + 1] - fxi[index]) / (xi[index + 1] - xi[index]);
}

function backwardDifference(index, xi, fxi) {
  return (fxi[index] - fxi[index - 1]) / (xi[index] - xi[index - 1]);
}

function centralDifference(index, xi, fxi) {
  return (
    (fxi[index + 1] - fxi[index - 1]) / (2 * (xi[index + 1] - xi[index - 1]))
  );
}

function calculateDerivatives() {
  const xiInput = document.getElementById("xi").value;
  const fxiInput = document.getElementById("fxi").value;
  const point = parseFloat(document.getElementById("point").value);

  const xi = parseInput(xiInput);
  const fxi = parseInput(fxiInput);

  const index = findIndex(point, xi);

  if (xi.length !== fxi.length) {
    Swal.fire({
      title: "Nabil:",
      text: "Jumlah nilai Xi dan F(Xi) harus sama",
      imageUrl: "./img/nabil.png",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
    return;
  }
  if (index === -1) {
    Swal.fire({
      title: "Nabil:",
      text: "Titik tidak ada dalam daftar Xi",
      imageUrl: "./img/nabil.png",
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
    return;
  }

  if (index > 0 && index < xi.length - 1) {
    document.getElementById("forwardDiff").textContent = forwardDifference(
      index,
      xi,
      fxi
    ).toFixed(2);
    document.getElementById("backwardDiff").textContent = backwardDifference(
      index,
      xi,
      fxi
    ).toFixed(2);
    document.getElementById("centralDiff").textContent = centralDifference(
      index,
      xi,
      fxi
    ).toFixed(2);
  } else if (index === 0) {
    document.getElementById("forwardDiff").textContent = forwardDifference(
      index,
      xi,
      fxi
    ).toFixed(2);
    document.getElementById("backwardDiff").textContent = "N/A";
    document.getElementById("centralDiff").textContent = "N/A";
  } else if (index === xi.length - 1) {
    document.getElementById("forwardDiff").textContent = "N/A";
    document.getElementById("backwardDiff").textContent = backwardDifference(
      index,
      xi,
      fxi
    ).toFixed(2);
    document.getElementById("centralDiff").textContent = "N/A";
  }
}
