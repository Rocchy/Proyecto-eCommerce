  
      // CAMBIAR LOS ESTILOS 
     function setTheme(theme) {
        document.body.className = theme; // Cambia dinámicamente la clase del body
     }


     // VALIDAR EL FORMULARIO QUE ESTE COMPLETO ANTES DE ENVIAR
     (function () {
        'use strict';
        const forms = document.querySelectorAll('#registrationForm');

        Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();

      document.getElementById("registrationForm").addEventListener("submit", function(event) {
        const emailInput = document.getElementById("correo");
        const email = emailInput.value;
        const validDomains = ['gmail.com', 'hotmail.com', 'outlook.com'];
        const emailDomain = email.substring(email.lastIndexOf('@') + 1);


        // Verificar si el correo tiene un dominio válido
        if (!validDomains.includes(emailDomain)) {
            alert("Por favor, introduce un correo electrónico con un dominio válido: @gmail.com, @hotmail.com o @outlook.com.");
            emailInput.classList.add('is-invalid');
            event.preventDefault(); // Evita el envío del formulario
        } else {
            emailInput.classList.remove('is-invalid'); // Elimina cualquier error previo
        }
    }); 