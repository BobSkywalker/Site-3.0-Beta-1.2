const btn = document.querySelector("#botao");
const navbar = document.querySelector("#header");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");
const footer = document.querySelector(".footer");
const endFooter = document.querySelector(".endFooter");
const endFooter2 = document.querySelector(".endFooter2");
const body = document.querySelector(".body");

btn.addEventListener("click", () => navbar.classList.toggle("active"));
btn.addEventListener("click", () => link1.classList.toggle("active"));
btn.addEventListener("click", () => link2.classList.toggle("active"));
btn.addEventListener("click", () => link3.classList.toggle("active"));
btn.addEventListener("click", () => footer.classList.toggle("active"));
btn.addEventListener("click", () => endFooter.classList.toggle("active"));
btn.addEventListener("click", () => endFooter2.classList.toggle("active"));
btn.addEventListener("click", () => body.classList.toggle("active"));
