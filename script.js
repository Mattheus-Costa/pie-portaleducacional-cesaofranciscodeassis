function abrirModal() {
  document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function abrirLogin() {
  document.getElementById("loginmodal").style.display = "flex";
}

function fecharLogin() {
  document.getElementById("loginmodal").style.display = "none";
}

function mostrarmatriculapizza() {
  document.getElementById("matricula-modal-pizza").style.display = "flex";
}

function fecharMatriculaPizza() {
  document.getElementById("matricula-modal-pizza").style.display = "none";
}


function mostrarmatriculapao() {
  document.getElementById("matricula-modal-pao").style.display = "flex";
}

function fecharMatriculaPao() {
  document.getElementById("matricula-modal-pao").style.display = "none";
}

function mostrarmatriculamanicure() {
  document.getElementById("matricula-modal-manicure").style.display = "flex";
}

function fecharMatriculaManicure() {
  document.getElementById("matricula-modal-manicure").style.display = "none";
}


function mostrarnoticiabiju() {
  document.getElementById("noticia-modal-biju").style.display = "flex";
}

function fecharNoticiaBiju() {
  document.getElementById("noticia-modal-biju").style.display = "none";
}

function mostrarnoticiapremio() {
  document.getElementById("noticia-modal-premio").style.display = "flex";
}

function fecharNoticiaPremio() {
  document.getElementById("noticia-modal-premio").style.display = "none";
}

function mostrarnoticiaretiro() {
  document.getElementById("noticia-modal-retiro").style.display = "flex";
}

function fecharNoticiaRetiro() {
  document.getElementById("noticia-modal-retiro").style.display = "none";
}

function MostrarDoaCaneta(){
  document.getElementById("doa-modal-lapis").style.display = "flex";
}

function fecharLapis(){
  document.getElementById("doa-modal-lapis").style.display = "none";
}

function MostrarDoaFolha(){
  document.getElementById("doa-modal-folha").style.display = "flex";
}

function fecharFolha(){
  document.getElementById("doa-modal-folha").style.display = "none";
}

function MostrarDoaCart(){
  document.getElementById("doa-modal-cart").style.display = "flex";
}

function fecharCart(){
  document.getElementById("doa-modal-cart").style.display = "none";
}

function entrar() {
  let user = document.getElementById("usuario").value
  let pass = document.getElementById("senha").value


    if (user === "aluno"  &&  pass === "123"){
        window.location.href = "paginaaluno.html";
    }
    else if (user ==="professor" && pass==="123"){
        window.location.href = "paginaprofessor.html"
    }
        else if (user ==="coordenacao" && pass==="123"){
        window.location.href = "paginacoordenacao.html"
    }
    else if (user.trim() =="" || pass.trim() == "") {
      alert("LOGIN INVÁLIDO.\n PREENCHA TODOS OS CAMPOS.")
    }
    else {
      alert("LOGIN INVÁLIDO.\n USUÁRIO OU SENHA INVÁLIDA")
    }
}
