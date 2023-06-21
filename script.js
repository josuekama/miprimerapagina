function showAlert() 
{ alert("hola esta es una alerta de javascript"); 
}
const form = document.getElementById('myForm');

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
          function validateForm() {
          const input = document.getElementById('email');
         const inputValue = input.value;
         if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
       } else {
         alert('Correo electrónico enviado correctamente.');
        }
       }
      form.addEventListener("submit", function(lala){
     lala.preventDefault()
    validateForm();
})
document.querySelector("button.button-menu-toggle")
ElementListener("click", function() {
    document.querySelector(".nav-linck").classList.toggle("nav-linck-responcive")
}
)