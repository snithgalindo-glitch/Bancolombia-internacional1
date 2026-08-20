document.addEventListener('DOMContentLoaded', () => {
  const accessForm = document.getElementById('access-form');
  const loginView = document.getElementById('login-view');
  const dashboardView = document.getElementById('dashboard-view');
  const userDisplay = document.getElementById('user-display');
  const logoutBtn = document.getElementById('logout-btn');

  // Evento al enviar el formulario
  accessForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById('username').value;
    
    if (usernameInput.trim() !== '') {
      userDisplay.textContent = usernameInput;
      loginView.classList.add('hidden');
      dashboardView.classList.remove('hidden');
    }
  });

  // Evento para cerrar sesión
  logoutBtn.addEventListener('click', () => {
    accessForm.reset();
    dashboardView.classList.add('hidden');
    loginView.classList.remove('hidden');
  });
});
