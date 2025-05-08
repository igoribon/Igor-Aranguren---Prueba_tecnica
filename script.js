//Funcionaidad para cambiar la imagen de la Mona Lisa y su texto al clicar sobre ella
function cambiarMonaLisa() {
    const imagen = document.getElementById('monaLisa');
    const texto = document.getElementById('monaLisaTexto');
    if (imagen.src.includes('obra1.jpg')) {
        imagen.src = 'images/obra1-2.jpg';
        texto.textContent = 'Procede de la colección real, donde probablemente se registra ya en 1666 en la Galería del Mediodía del Alcázar como una mujer de mano de Leonardo Abince.';
    } else {
        imagen.src = 'images/obra1.jpg';
        texto.textContent = 'Obra maestra de Leonardo da Vinci, pintada entre 1503 y 1519. Es uno de los retratos más famosos de la historia del arte.';
    }
}


//Funcionalidad para cambiar la visibilidad del password en la página de login

const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', function() {
        // Cambiar el tipo de input
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Cambiar la imagen del ojo
        this.src = type === 'password' ? 'images/eye-closed.png' : 'images/eye-open.png';
    });
}


//funcionalidad para habilitar el botón de enviar en la página de contacto cuando se aceptén las políticas de privacidad
const rgpdcheckbox = document.getElementById('rgpd');
const submitBtn = document.getElementById('submitBtn');
if (rgpdcheckbox && submitBtn) {
    rgpdcheckbox.addEventListener('change', function() {
        submitBtn.disabled = !this.checked; 
    });
};


//Funcionalidad para poner el reloj en el header de la página de inicio
function actualizarReloj() {
    const reloj = document.getElementById('reloj');
    const fecha = new Date();
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const dia = diasSemana[fecha.getDay()];
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    const segundos = String(fecha.getSeconds()).padStart(2, '0');

    reloj.textContent = `${dia} ${horas}:${minutos}:${segundos}`;
    setTimeout(actualizarReloj, 1000);
}

window.onload = actualizarReloj;


//Funcionalidad para revisar si se ha logueado correctamente en la página de login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('assets/usuarios.json');
            if (!response.ok) {
                throw new Error('Error al cargar los datos de usuarios');
            }
            const data = await response.json();
            
            const usuarioEncontrado = data.users.find(u => 
                u.nombre === usuario && u.password === password
            );

            if (usuarioEncontrado) {
                alert('Login exitoso');
                this.reset();
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al procesar el login');
        }
    });
}