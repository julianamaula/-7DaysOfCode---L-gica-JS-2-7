document.getElementById('infoForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Coleta os valores dos campos
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const linguagem = document.getElementById('linguagem').value;
  const gostando = document.getElementById('gostando').value;

  // Exibe a saudação
  const saudacao = `Olá, ${nome}! Você tem ${idade} anos e está estudando ${linguagem}.`;
  document.getElementById('saudacao').textContent = saudacao;

  // Exibe o feedback com base na resposta
  let feedback = '';
  if (gostando === "1") {
      feedback = "Muito bom! Continue estudando e você terá muito sucesso.";
  } else if (gostando === "2") {
      feedback = "Ahh que pena... Já tentou aprender outras linguagens?!";
  }
  document.getElementById('feedback').textContent = feedback;

  // Mostra a seção de saída
  document.getElementById('output').style.display = 'block';
});