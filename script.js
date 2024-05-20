// Añadimos un evento de escucha al formulario de contacto para la validación
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true; // Variable para rastrear la validez del formulario
    const fields = ['name', 'email', 'subject', 'message', 'contactMethod']; // Campos obligatorios
    
    // Recorremos cada campo para verificar que no estén vacíos
    fields.forEach(function(field) {
        const element = document.getElementById(field);
        if (!element.value) { // Si el campo está vacío
            valid = false; // Marcar el formulario como inválido
            element.style.border = '2px solid red'; // Marcar el campo como inválido con un borde rojo
        } else {
            element.style.border = ''; // Restablecemos el borde si el campo es válido
        }
    });
    
    // Si algún campo está vacío, prevenimos el envío del formulario y mostramos una alerta
    if (!valid) {
        event.preventDefault(); // Evita el envío del formulario
        alert('Por favor, complete todos los campos obligatorios.'); // Muestra una alerta al usuario
    }
});
