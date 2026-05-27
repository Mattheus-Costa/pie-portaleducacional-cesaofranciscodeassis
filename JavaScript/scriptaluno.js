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
                     <p>Olá, alunos!<br> Resolva as operações abaixo com atenção e escreva os resultados no caderno. <br> 5 × 5 = ___ <br> 4 ÷ 2 = ___ <br></p>
                     <a  onclick="enviar('matematica')" class="btn btn-outline-primary btn-postagem">Enviar Resposta</a>

            </div>

      <div class="card card-interno-atv">
                     <h3>ATIVIDADE 01: ADIÇÃO E SUBTRAÇÃO</h3>
                     <p>Tutor: Professor 1</p>
                    <p>Olá, turma!<br>Resolva as contas abaixo e escreva seus resultados no caderno. <br> 15 + 7 = ___<br> 50 - 18 = ___<br></p>

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
                     <p>Olá, alunos! Leia as frases abaixo e circule os verbos.<br> 1. João correu no parque. <br> 2. A menina desenha muito bem.<br> 3. O cachorro latiu durante a noite.<br></p>
                     <a  onclick="enviar('portugues')" class="btn btn-outline-primary btn-postagem">Enviar Resposta</a>

      </div>
      <div class="card card-interno-atv">
                     <h3>ATIVIDADE 01: SUBSTANTIVOS</h3>
                     <p>Tutor: Professor 2</p>
                     <p> Olá, turma! Leia as palavras abaixo e escreva se são substantivos de pessoa, animal, lugar ou objeto.<br> 1. Cachorro → __________<br>2. Escola → __________<br>3. Bola → __________<br></p>

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
                    <p>Olá, alunos! Observe os seres vivos abaixo:<br> <strong>Capim, Coelho, Cobra, Gavião</strong><br><br>1. Organize os seres vivos na ordem correta da cadeia alimentar.<br>2. Qual deles é o produtor?<br>3. Qual deles é o consumidor primário?<br></p>
                    <a onclick="enviar('ciencias')" class="btn btn-outline-primary btn-postagem">Enviar Resposta</a>
        </div>
      <div class="card card-interno-atv">
      
                    <h3>ATIVIDADE 01: CORPO HUMANO</h3>
                    <p>Tutor: Professor 3</p>
                    <p>Olá, turma! Façam um desenho do corpo humano e identifiquem:<br><strong>• Cabeça<br>• Braços<br>• Pernas<br>• Mãos<br>• Pés</strong><br></p> 
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