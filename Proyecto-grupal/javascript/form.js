document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('Contacto');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe de forma convencional

        // Obtener datos del formulario
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;

        // Puedes hacer algo con los datos aquí, como imprimirlos en la consola
        console.log('name', nombre);
        console.log('email', email);
        console.log('phone', phone);
    });
});