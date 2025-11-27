const videoInput = document.getElementById('videoInput');
const preview = document.getElementById('preview');

videoInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    preview.src = URL.createObjectURL(file);
  }
});

function salvar() {
  const texto = document.getElementById("comentario").value.trim();
  const resultado = document.getElementById("resultado");

  if (texto === "") {
    alert("Por favor, escreva um comentário.");
    return;
  }

  resultado.style.display = "block";
  resultado.innerHTML = `<h3>Comentário Salvo:</h3><p>${texto}</p>`;
}
