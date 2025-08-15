

/** */
function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Evita que recargue la página

  let nombre = document.getElementById("nombre").value.trim();
  let apellido = document.getElementById("apellido").value.trim();
  let email = document.getElementById("email").value.trim();
  let pass1 = document.getElementById("password1").value;
  let pass2 = document.getElementById("password2").value;
  let terminos = document.getElementById("terminos").checked;

  if (
    !nombre ||
    !apellido ||
    !email ||
    !pass1 ||
    !pass2 ||
    pass1.length < 6 ||
    pass1 !== pass2 ||
    /*!document.getElementById("password").value ||
    !document.getElementById("password2").value ||*/
    !terminos
  ) {
    showAlertError();
  } else {
    showAlertSuccess();
    console.log(nombre);
    console.log(apellido);
    console.log(email);
    console.log(pass1);
    console.log(pass2);
    console.log(terminos);
  }
  /*  if (pass1.value < 6 && pass1.value != pass2.value) {
    showAlertError();
  }*/
});
function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
  document.getElementById("alert-danger").classList.remove("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
  document.getElementById("alert-success").classList.remove("show");
}

document.getElementById("regBtn").addEventListener("click", function () {
  validarFormulario();
});

function validarFormulario() {
  let nombre = document.getElementById("nombre").value.trim();
  let apellido = document.getElementById("apellido").value.trim();
  let email = document.getElementById("email").value.trim();
  let pass1 = document.getElementById("password1").value;
  let pass2 = document.getElementById("password2").value;
  let terminos = document.getElementById("terminos").checked;

  if (!nombre || !apellido || !email || !pass1 || !pass2 || !terminos) {
    showAlertError();
    return false;
  }

  if (pass1.length < 6 || pass1 !== pass2) {
    showAlertError();
    return false;
  }
  console.log(nombre);
  console.log(apellido);
  console.log(email);
  console.log(pass1);
  console.log(pass2);
  console.log(terminos);

  showAlertSuccess();
  return true;
}
