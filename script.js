// Elementos principales.
const darkModeToggle = document.getElementById("dark-mode-toggle");
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
const modalClose = document.getElementById("modal-close");
const qrText = document.getElementById("qr-text");
const qrColor = document.getElementById("qr-color");
const bgColor = document.getElementById("bg-color");
const qrSize = document.getElementById("qr-size");
const generateBtn = document.getElementById("generate-btn");
const qrcodeContainer = document.getElementById("qrcode");
const downloadBtn = document.getElementById("download-btn");

let qr;

// Modo oscuro.
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "☀️";
    localStorage.setItem("modo", "oscuro");
  } else {
    darkModeToggle.textContent = "🌙";
    localStorage.setItem("modo", "claro");
  }
});

// Mantener modo oscuro.
window.addEventListener("DOMContentLoaded", () => {
  const modo = localStorage.getItem("modo");
  if (modo === "oscuro") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️";
  }
});

// Generar QR.
generateBtn.addEventListener("click", () => {
  const texto = qrText.value.trim();

  if (texto === "") {
    mostrarModal("Por favor, escribe un texto o URL para generar el código QR.", false);
    return;
  }

  qrcodeContainer.innerHTML = "";

  qr = new QRCode(qrcodeContainer, {
    text: texto,
    width: parseInt(qrSize.value),
    height: parseInt(qrSize.value),
    colorDark: qrColor.value,
    colorLight: bgColor.value,
    correctLevel: QRCode.CorrectLevel.H
  });

  // Animación de aparición.
  qrcodeContainer.classList.remove("visible");
  downloadBtn.classList.remove("visible");
  setTimeout(() => {
    qrcodeContainer.classList.add("visible");
    downloadBtn.classList.remove("hidden");
    setTimeout(() => downloadBtn.classList.add("visible"), 200);
  }, 200);
});

// Descargar QR.
downloadBtn.addEventListener("click", () => {
  const img = qrcodeContainer.querySelector("img");
  if (img) {
    const enlace = document.createElement("a");
    enlace.href = img.src;
    enlace.download = "codigo-qr.png";
    enlace.click();
  } else {
    mostrarModal("Primero genera un código QR antes de descargarlo.", false);
  }
});

// Modal.
function mostrarModal(mensaje, exito = true) {
  modalMessage.textContent = mensaje;
  modalMessage.className = exito ? "success" : "error";
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");

  setTimeout(() => {
    cerrarModal();
  }, 4000);
}

modalClose.addEventListener("click", cerrarModal);

function cerrarModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

window.addEventListener("click", (e) => {
  if (e.target === modal) cerrarModal();
});