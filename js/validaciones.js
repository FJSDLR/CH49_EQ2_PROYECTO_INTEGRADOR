//Validacion contraseñas
const contrasena = "miContraseña";
const confirmarContrasena = "miContraseña";

if (contrasena === confirmarContrasena) {
    console.log("Las contraseñas coinciden");
    <div class="alert alert-primary" role="alert">
  Las contraseñas coinciden
</div>
} else {
    console.log("Las contraseñas no coinciden");
    <div class="alert alert-danger" role="alert">
Las contraseñas no coinciden
</div>

}


//Que no sea un numero con solo ceros y que no empieze con ceros
function validarNumeroCelular(numero) {

    const regex = /^(?!0000000000$)[1-9][0-9]{9}$/;
    if (regex.test(numero)) {
        console.log("Número válido");
        return true;
    } else {
        console.log("Número no válido");
        return false;
    }
}


   // Capturamos el formulario y los elementos
   const formulario = document.getElementById('telefonoForm');
   const telefonoInput = document.getElementById('telefono');
   const errorMessage = document.getElementById('error-message');
   const successMessage = document.getElementById('success-message');

   // Evento de submit del formulario
   formulario.addEventListener('validar', function(event) {
       event.preventDefault(); 

       const numero = telefonoInput.value.trim(); 
       errorMessage.textContent = '';  
       successMessage.textContent = ''; 

       // Validamos el número de celular
       if (validarNumeroCelular(numero)) {
           successMessage.textContent = 'Número de celular valido.';
           
       } else {
           errorMessage.textContent = 'Número de celular inválido.';
          
   }});


