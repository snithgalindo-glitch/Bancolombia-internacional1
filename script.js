document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const dashboardContainer = document.getElementById('dashboard-container');
    const userLoggedSpan = document.getElementById('user-logged');
    const btnLogout = document.getElementById('btn-logout');
    const togglePass = document.getElementById('togglePass');
    const passwordInput = document.getElementById('password');

    // --- Credenciales fijas para la validación ---
    const USUARIO_CORRECTO = "Raquel Flores";
    const CLAVE_CORRECTA = "2413";

    // 1. Mostrar/Ocultar contraseña de forma interactiva
    togglePass.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        togglePass.classList.toggle('fa-eye-slash');
        togglePass.classList.toggle('fa-eye');
    });

    // 2. Validación Real de Inicio de Sesión
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const usuarioInput = document.getElementById('usuario').value.trim();
        const passwordInputVal = passwordInput.value;

        // Limpiamos mensajes de error previos si existen
        const errorPrevio = document.querySelector('.error-message');
        if (errorPrevio) errorPrevio.remove();

        // Validamos si coinciden con los datos correctos
        if (usuarioInput === USUARIO_CORRECTO && passwordInputVal === CLAVE_CORRECTA) {
            // Si son correctos, pasa a la pantalla de bienvenida
            userLoggedSpan.textContent = usuarioInput;
            loginContainer.classList.add('hidden');
            dashboardContainer.classList.remove('hidden');
        } else {
            // Si son incorrectos, muestra un mensaje de error elegante sobre el botón
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

    // 3. Funcionalidad del botón de Cerrar Sesión
    btnLogout.addEventListener('click', () => {
        loginForm.reset();
        
        // Quitar mensaje de error si quedó visible al cerrar sesión
        const errorPrevio = document.querySelector('.error-message');
        if (errorPrevio) errorPrevio.remove();

        passwordInput.setAttribute('type', 'password');
        togglePass.classList.add('fa-eye-slash');
        togglePass.classList.remove('fa-eye');

        dashboardContainer.classList.add('hidden');
        loginContainer.classList.remove('hidden');
    });
});