// Controle do menu hambúrguer no site Violência nas Escolas

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const navItems = document.getElementById("navItems");
  let menuAberto = false;

  hamburgerIcon?.addEventListener("click", () => {
    menuAberto = !menuAberto;

    hamburgerIcon.firstElementChild.className = menuAberto
      ? "fa-solid fa-times"
      : "fa-solid fa-bars";

    navItems.style.width = menuAberto ? "100%" : "0";
    navItems.style.position = menuAberto ? "absolute" : "";
    navItems.style.top = menuAberto ? "80px" : "";
    navItems.style.left = menuAberto ? "0" : "";
    navItems.style.flexDirection = menuAberto ? "column" : "row";
    navItems.style.backgroundColor = menuAberto ? "rgba(0, 0, 0, 0.9)" : "";
    navItems.style.textAlign = menuAberto ? "center" : "";
    navItems.style.zIndex = menuAberto ? "10" : "";

    // Acessibilidade: atualiza aria-expanded
    hamburgerIcon.setAttribute("aria-expanded", menuAberto.toString());
  });
});

// Script reservado para futuras interações
function move() {
  // Espaço reservado para interações ou animações futuras
}
