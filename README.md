# Generador de Códigos QR

Aplicación web sencilla y ligera para crear códigos QR personalizados desde el navegador. Permite definir el texto o URL, el color del código, el color de fondo, el tamaño y descargar el resultado en PNG. Pensada para **rapidez**, **accesibilidad** y **fácil integración** en páginas estáticas.

---

## Características principales

- Generación de QR usando `qrcodejs`.
- Personalización: Color del QR, color de fondo y tamaño.
- Descarga directa a PNG desde la imagen generada.
- Interfaz responsiva y modo oscuro persistente.
- Mensajes y diálogo modal para feedback al usuario.

---

## Estructura del proyecto

```
/ generador-codigos-qr
├─ index.html        # Interfaz principal y carga de librerías externas.
├─ script.js         # Lógica de generación, descarga y modal.
├─ style.css         # Estilos, animaciones y modo oscuro.
└─ README.md         # Documentación.
```

---

## Requisitos / Notas técnicas

- Funciona en navegadores modernos que soporten `FileReader`, `canvas` y `Blob`.
- La librería `qrcodejs` se carga desde CDN en `index.html`.
- El modo oscuro se persiste usando `localStorage` (clave `modo`).
- La descarga genera un enlace al `src` de la imagen generada por `qrcodejs` y fuerza la descarga como `codigo-qr.png`.

---

## Visita la página web

[Presiona aquí.](https://alanaquino0303.github.io/generador-codigos-qr/)

---

## Autor

Alan Aquino.
