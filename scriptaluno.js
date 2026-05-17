function mostrar(disciplina){
    const area = document.getElementById("area-content")
    const titulo = document.getElementById("disciplina")

     if (disciplina === "matematica") {
    area.innerHTML = `

    <div class="card card-externo-atv">
     <h2 class="titulo-disciplina">POSTAGENS DE MATEMÁTICA</h2>
     <div id="mat" class="card card-interno-atv">
     
                     <h3>ATIVIDADE 02: MULTIPLICAÇÃO E DIVISÃO</h3>
                     <p>Tutor: Professor 1</p>
                     <a  onclick="enviar('matematica')" class="btn btn-outline-primary btn-postagem">Enviar Resposta</a>

            </div>

      <div class="card card-interno-atv">
                     <h3>ATIVIDADE 01: ADIÇÃO E SUBTRAÇÃO</h3>
                     <p>Tutor: Professor 1</p>
                     <a  onclick="enviar('matematica')" class="btn btn-outline-primary btn-postagem">Enviar Resposta</a>

         

      </div>
      </div>
     
    `;
        titulo.textContent = ""
  }

  if (disciplina === "portugues") {
    area.innerHTML = `
    <div class="card card-externo-atv">
    <h2 class="titulo-disciplina">POSTAGENS DE PORTUGUÊS</h2>
    <div id="port" class="card card-interno-atv">
                     <h3>ATIVIDADE 02: VERBOS</h3>
                     <p>Tutor: Professor 2</p>
                     <a  onclick="enviar('portugues')" class="btn btn-outline-primary btn-postagem">Enviar Resposta</a>

      </div>
      <div class="card card-interno-atv">
                     <h3>ATIVIDADE 01: SUBSTANTIVOS</h3>
                     <p>Tutor: Professor 2</p>
                     <a  onclick="enviar('portugues')" class="btn btn-outline-primary btn-postagem">Enviar Resposta</a>

      </div>
      </div>
      
    `;

     titulo.textContent = ""



  }

  if (disciplina === "ciencias") {
    area.innerHTML = `

    <div class="card card-externo-atv">
    <h2 class="titulo-disciplina">POSTAGENS DE CIÊNCIAS</h2>
     <div id="cienc" class="card card-interno-atv">
      
                    <h3>ATIVIDADE 02: CADEIA ALIMENTAR</h3>
                    <p>Tutor: Professor 3</p>
                    <a onclick="enviar('ciencias')" class="btn btn-outline-primary btn-postagem">Enviar Resposta</a>
        </div>
      <div class="card card-interno-atv">
      
                    <h3>ATIVIDADE 01: CORPO HUMANO</h3>
                    <p>Tutor: Professor 3</p>
                    <a  onclick="enviar('ciencias')" class="btn btn-outline-primary btn-postagem">Enviar Resposta</a>
      </div></div>
     
    `;

     titulo.textContent = ""
  }

}

function enviar (disciplina){
  if (disciplina === "matematica"){
    document.getElementById("modal-enviar-mat").style.display = "flex";
    
  }
    if (disciplina === "portugues"){
    document.getElementById("modal-enviar-port").style.display = "flex";
    
  }

  if (disciplina === "ciencias"){
    document.getElementById("modal-enviar-cien").style.display = "flex";
    
  }

}

function fecharMat(){
     document.getElementById("modal-enviar-mat").style.display = "none";
}



function fecharPort(){
     document.getElementById("modal-enviar-port").style.display = "none";
}


function fecharCien(){
     document.getElementById("modal-enviar-cien").style.display = "none";
}