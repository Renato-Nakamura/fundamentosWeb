let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
console.log(assunto)
let nomeValido = false
let emailValido = false
let assuntoValido = false

function validaNome(){
     txtNome = document.querySelector('#txtnome')
     if(nome.value.length <3){
        txtNome.innerHTML = "Nome invalido"
        txtNome.style.color = 'red'
     }else{
         txtNome.innerHTML = "Nome valido"
         txtNome.style.color = 'green'
         nomeValido = 1
     }
 }

 function validaEmail(){
    txtEmail = document.querySelector('#txtemail')
    if(email.value.indexOf('@') ==-1 || email.value.indexOf('.') ==-1){
       txtEmail.innerHTML = "email invalido"
       txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = "email valido"
        txtEmail.style.color = 'green'
        emailValido = 1
    }
}
function validaAssunto(){
    txt = document.querySelector('#txtassunto')
    if(assunto.value.length >100){
       txt.innerHTML = "muito longo cara"
       txt.style.color = 'red'
    }else{
        txt.innerHTML = "valido"
        txt.style.color = 'green'
        assuntoValido = 1
    }
}
function validaTudo(){
    if(nomeValido= true && emailValido==true&& assuntoValido==true){
        alert("enviado")
    }else{
        alert('corrigeai')
    }
}