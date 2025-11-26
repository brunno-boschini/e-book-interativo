// Smooth scroll
document.getElementById("scrollBtn").onclick = () => {
  document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
};

// Acordeão dos capítulos
document.querySelectorAll(".toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const conteudo = btn.nextElementSibling;
    conteudo.style.display =
      conteudo.style.display === "block" ? "none" : "block";
  });
});

// Quiz
function verificarQuiz() {
  const resposta = document.getElementById("quiz").value;
  const msg = document.getElementById("resultadoQuiz");

  if (resposta == 4) msg.textContent = "Acertou!";
  else msg.textContent = "Tente novamente!";
}

// Formulário
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formMsg").textContent = "Mensagem enviada!";
});
