let paragrafo = document.querySelector("#para1");

paragrafo.addEventListener("mouseover", mudaGreen);
paragrafo.addEventListener("mouseout", mudaRed);

function mudaGreen() {
  paragrafo.style.background = "green";
}

function mudaRed() {
  paragrafo.style.background = "red";
}
