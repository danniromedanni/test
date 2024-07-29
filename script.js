emailjs.init('service_vkr7n29'); // Reemplaza 'tu_user_id' con tu ID de usuario de EmailJS

document.getElementById('contactButton').addEventListener('click', function() {
    const emailParams = {
        to_email: 'santaweb.sf@gmail.com',
        subject: 'Consulta desde el sitio web',
        message: '¡Hola! Alguien ha hecho clic en el botón de contacto en tu sitio web.'
    };

    emailjs.send('service_vkr7n29', 'template_3rqwhvj', emailParams)
        .then(function(response) {
            alert('Gracias por tu interés. Nos pondremos en contacto contigo pronto.');
            console.log('Éxito:', response);
        }, function(error) {
            alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
            console.log('Error:', error);
        });
});
