function validarSenha() {
  var senha = document.getElementById("senha").value;
  var confirmarSenha = document.getElementById("confirmarSenha").value;
  var campoSenha = document.getElementById("senha");
  var campoConfirmarSenha = document.getElementById("confirmarSenha");

  if (senha != confirmarSenha) {
    alert("As senhas não coincidem!");
    campoSenha.style.borderBottom = "2px solid red"; // Define a borda vermelha na parte inferior do campo de senha
    campoConfirmarSenha.style.borderBottom = "2px solid red"; // Define a borda vermelha na parte inferior do campo de confirmação de senha
    return false;
  } else {
    // Se as senhas coincidirem, redefinir a cor da borda inferior para a cor padrão
    campoSenha.style.borderBottom = "1px solid #ccc"; 
    campoConfirmarSenha.style.borderBottom = "1px solid #ccc";
    // O formulário será enviado normalmente
    return true;
  }
}

function menuShow() {
    let menuMoblie = document.querySelector('.mobile-menu');
    if (menuMoblie.classList.contains('open')) {
        menuMoblie.classList.remove('open')
    } else {
        menuMoblie.classList.add('open')
    }
}
