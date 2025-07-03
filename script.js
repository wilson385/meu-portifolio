function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector(".profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/will21.png")
  } else {
    img.setAttribute("src", "assets/image.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Wilson Oliveira tirada em frente ao Google Gemini"
    )
  } else {
    img.setAttribute("alt", "Foto de Wilson Oliveira no evento Summit-Senac")
  }
}
