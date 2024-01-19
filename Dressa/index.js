// script.js
function mostrarMensagem() {
    var mensagem = document.getElementById('mensagemSurpresa');
    mensagem.style.display = 'block'; // Mostra a mensagem
  }
  
  function resposta(resposta) {
    var mensagem = document.getElementById('mensagemSurpresa');
    if (resposta === 'sim') {
      mensagem.textContent = 'Ótimo! Mal posso esperar! 😊';
    } else {
      // Movemos o botão Não para fora do viewport, tornando impossível clicar nele
      document.querySelector('.no-button').style.position = 'absolute';
      document.querySelector('.no-button').style.top = '-9999px';
      document.querySelector('.no-button').style.left = '-9999px';
    }
  }
  
  function moveButton(btn) {
    // Aumentar a distância máxima de deslocamento em torno do botão atual
    var maxDistance = 150; // pixels
    var rect = btn.getBoundingClientRect();
    var novoX = Math.random() * maxDistance * (Math.random() < 0.5 ? -1 : 1);
    var novoY = Math.random() * maxDistance * (Math.random() < 0.5 ? -1 : 1);
  
    // Ajustar o botão para se mover rapidamente a uma curta distância da posição atual
    btn.style.transform = `translate(${novoX}px, ${novoY}px)`;
  }
  
  