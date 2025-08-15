function showAlertSuccess() {
  const alerta = document.getElementById("alert-success");
  alerta.classList.add("show");

  setTimeout(() => {
    alerta.classList.remove("show");
  }, 3000);
}

function showAlertError() {
  const alerta = document.getElementById("alert-danger");
  alerta.classList.add("show");

  setTimeout(() => {
    alerta.classList.remove("show");
  }, 3000);
}

document.getElementById("regBtn").addEventListener("click", function () {
  validarFormulario();
});

function validarFormulario() {
  let nombre = document.getElementById("nombre").value.trim();
  let apellido = document.getElementById("apellido").value.trim();
  let email = document.getElementById("email").value.trim();
  let pass1 = document.getElementById("password1").value.trim();
  let pass2 = document.getElementById("password2").value.trim();
  let terminos = document.getElementById("terminos").checked;

  if (!nombre || !apellido || !email || !pass1 || !pass2 || !terminos) {
    showAlertError();
    return false;
  }

  if (pass1.length < 6 || pass1 !== pass2) {
    showAlertError();
    return false;
  }
  if (!terminos) {
    showAlertError("Debes aceptar los términos y condiciones");
    return;
  }

  showAlertSuccess();
  return true;
}
