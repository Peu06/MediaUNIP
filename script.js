function calcularMedia() {
  const p1 = parseFloat(document.getElementById('p1').value);
  const p2 = parseFloat(document.getElementById('p2').value);
  const pim = parseFloat(document.getElementById('pim').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(p1) || isNaN(p2) || isNaN(pim)) {
    resultado.innerHTML = "⚠️ Por favor, preencha todas as notas.";
    resultado.style.color = "orange";
    return;
  }

  // Cálculo simples da média
  const media = ((p1 * 4)+ (p2 * 4) + (pim * 2)) / 10;
  let mensagem = `Média final: ${media.toFixed(2)}<br>`;

  if (media >= 7) {
    mensagem += "✅ Aprovado!";
    resultado.style.color = "green";
  } else {
    mensagem += "❌ Reprovado!";
    resultado.style.color = "red";
  }

  resultado.innerHTML = mensagem;
}
