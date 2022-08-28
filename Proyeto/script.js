/*Validando Formulario*/
function validar (){
    var form = document.form;
    if (form.nome.value==0) {
        alert("O espaço nome está vazio");
        form.nome.value="";
        form.nome.focus();
        return false;
    }
    if (form.email.value==0) {
        alert("O espaço e-mail está vazio");
        form.email.value="";
        form.email.focus();
        return false;
    }
    if (form.telefone.value==0) {
        alert("O espaço telefone está vazio");
        form.telefone.value="";
        form.telefone.focus();
        return false;
    }
    if (form.menssagem.value==0) {
        alert("O espaço menssagem está vazio");
        form.menssagem.value="";
        form.menssagem.focus();
        return false;
    }
    alert("Obrigado pelo contato");
    form.submit();
}

function validarEmail() {
    var email = document.querySelector('#email');
    var error = document.querySelector('#erromail');
    if(!email.checkValidity()){
        error.innerHTML = "Email invalido";
    }
}

function redefinirMsg(){
    var error = document.querySelector('#erromail');
    if (error.innerHTML == "Email invalido"){
        error.innerHTML ="";
    }
}

