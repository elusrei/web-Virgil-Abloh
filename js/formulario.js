document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar el envío del formulario
    const errors = validateForm();

    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = ''; // Limpiar mensajes de error previos

    if (Object.keys(errors).length > 0) {
        for (const error in errors) {
            errorMessages.innerHTML += `<p>${errors[error]}</p>`;
        }
    } else {
        saveToLocalStorage();
        errorMessages.innerHTML = '<p class="text-green-500">Datos guardados exitosamente!.</p>';
    }
});

function validateForm() {
    const errors = {};
    const nombre = document.getElementById('nombre').value;
    const numContacto = document.getElementById('numContacto').value;
    const mailContacto = document.getElementById('mailContacto').value;
    const linkRed = document.getElementById('linkRed').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validar nombre
    if (!nombre || validator.isEmpty(nombre)) {
        errors.nombre = 'El nombre es requerido.';
    }

    // Validar número de contacto
    if (!numContacto || !validator.isMobilePhone(numContacto, 'any')) {
        errors.numContacto = 'El número de contacto debe ser un número válido.';
    }

    // Validar correo electrónico de contacto
    if (!mailContacto || !validator.isEmail(mailContacto)) {
        errors.mailContacto = 'El correo electrónico debe ser válido.';
    }

    // Validar enlace a otra red
    if (linkRed && !validator.isURL(linkRed)) {
        errors.linkRed = 'El enlace a otra red debe ser una URL válida.';
    }

    // Validar mensaje
    if (!mensaje || !validator.isLength(mensaje, { min: 50 })) {
        errors.mensaje = 'El mensaje debe contener más de 50 caracteres.';
    }

    return errors;
}

function saveToLocalStorage() {
    const nombre = document.getElementById('nombre').value;
    const numContacto = document.getElementById('numContacto').value;
    const mailContacto = document.getElementById('mailContacto').value;
    const linkRed = document.getElementById('linkRed').value;
    const mensaje = document.getElementById('mensaje').value;

    const formData = {
        nombre,
        numContacto,
        mailContacto,
        linkRed,
        mensaje
    };

    // Guardar los datos en el localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData));
}
