// Mengambil elemen-elemen pada halaman
const celsiusInput = document.getElementById("celsius-input");
const fahrenheitInput = document.getElementById("fahrenheit-input");
const calculationDisplay = document.getElementById("calculation-display");
const convertButton = document.getElementById("convert-button");
const resetButton = document.getElementById("reset-button");
const reverseButton = document.getElementById("reverse-button");

// Menambahkan event listener saat tombol Convert ditekan
convertButton.addEventListener("click", () => {
  const celsius = parseFloat(celsiusInput.value);

  if (isNaN(celsius)) {
    alert("Masukkan suhu dalam format angka!");
    return;
  }

  const fahrenheit = (celsius * 9) / 5 + 32;

  fahrenheitInput.value = `${fahrenheit} °F`;
  calculationDisplay.innerHTML = `<p>( ${celsius} °C &times; 9/5 ) + 32 = ${fahrenheit} °F</p>`;
});

// Menambahkan event listener saat tombol Reset ditekan
resetButton.addEventListener("click", () => {
  celsiusInput.value = "";
  fahrenheitInput.value = "0 °F";
  calculationDisplay.textContent = "";
});

// Menambahkan event listener saat tombol Reverse ditekan
reverseButton.addEventListener("click", () => {
  const fahrenheit = parseFloat(fahrenheitInput.value);

  if (isNaN(fahrenheit)) {
    alert("Konversi suhu terlebih dahulu!");
    return;
  }

  const celsius = ((fahrenheit - 32) * 5) / 9;

  celsiusInput.value = celsius.toFixed(2);
  calculationDisplay.innerHTML = `<p>( ${fahrenheit} °F - 32 ) &times; 5/9 = ${celsius.toFixed(
    2
  )} °C</p>`;
});
