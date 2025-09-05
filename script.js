const botoes = document.querySelectorAll('.carrossel button');
const panels = document.querySelectorAll('.panel');

document.getElementById('home').classList.add('ativa');
document.querySelector('[data-secao="home"]').classList.add('ativo');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    botoes.forEach(b => b.classList.remove('ativo'));
    botao.classList.add('ativo');
    panels.forEach(p => p.classList.remove('ativa'));

    const idSecao = botao.dataset.secao;
    document.getElementById(idSecao).classList.add('ativa');
  });
});