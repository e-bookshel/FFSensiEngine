function calculateSensitivity() {
  const dpi = parseFloat(document.getElementById("dpi").value);
  const width = parseFloat(document.getElementById("width").value);
  const height = parseFloat(document.getElementById("height").value);

  if (!dpi || !width || !height) {
    document.getElementById("result").textContent = "Please fill all inputs correctly.";
    return;
  }

  // Example formula (customize if needed)
  const sens = ((dpi * 0.002) + ((width + height) / 4000)).toFixed(2);

  document.getElementById("result").innerHTML = `<strong>Headshot Sensitivity:</strong> ${sens}`;
}
