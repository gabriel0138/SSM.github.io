function openTab(evt, tabName) {
    const tabContent = document.querySelectorAll('.tabcontent');
    const tabLinks = document.querySelectorAll('.tablinks');
  
    // Ocultar todos os conteúdos de abas
    tabContent.forEach((content) => (content.style.display = 'none'));
  
    // Remover a classe "active" de todos os botões
    tabLinks.forEach((link) => link.classList.remove('active'));
  
    // Mostrar o conteúdo da aba atual e adicionar "active" ao botão
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
  }
  
  // Exibir a primeira aba por padrão
  document.querySelector('.tablinks').click();
  