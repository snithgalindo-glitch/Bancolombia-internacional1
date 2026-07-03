document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const dashboardContainer = document.getElementById('dashboard-container');
    const userLoggedSpan = document.getElementById('user-logged');
    const btnLogout = document.getElementById('btn-logout');
    const togglePass = document.getElementById('togglePass');
    const passwordInput = document.getElementById('password');

    const USUARIO_CORRECTO = "franciscopadilla2026";
    const CLAVE_CORRECTA = "2413";

    togglePass.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePass.classList.toggle('fa-eye-slash');
        togglePass.classList.toggle('fa-eye');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const usuarioInput = document.getElementById('usuario').value.trim().toLowerCase();
        const passwordInputVal = passwordInput.value;

        const errorPrevio = document.querySelector('.error-message');
        if (errorPrevio) errorPrevio.remove();

        if (usuarioInput === USUARIO_CORRECTO && passwordInputVal === CLAVE_CORRECTA) {
            userLoggedSpan.textContent = 'Francisco Padilla rubio';
            loginContainer.classList.add('hidden');
            dashboardContainer.classList.remove('hidden');
        } else {
            const errorMessage = document.createElement('p');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'Usuario o contraseña incorrectos. Intente de nuevo.';
            errorMessage.style.color = '#dc3545';
            errorMessage.style.fontSize = '13px';
            errorMessage.style.marginBottom = '15px';
            errorMessage.style.textAlign = 'center';
            errorMessage.style.fontWeight = '500';
            loginForm.insertBefore(errorMessage, loginForm.querySelector('.btn-primary'));
        }
    });

    btnLogout.addEventListener('click', () => {
        loginForm.reset();
        const errorPrevio = document.querySelector('.error-message');
        if (errorPrevio) errorPrevio.remove();
        passwordInput.setAttribute('type', 'password');
        togglePass.classList.add('fa-eye-slash');
        togglePass.classList.remove('fa-eye');
        dashboardContainer.classList.add('hidden');
        loginContainer.classList.remove('hidden');
    });
});