let inventario = []
let pergunta
let vida = 15
let checkpoint
function historia() {
    pergunta = prompt(`Seu país esta em guerra, sua cidade natal está em completo caos, são tiros para todos os lados, porém você tem receio de deixar sua terra. \nAperte "enter" para continuar.`)
    let consequencia = Number(prompt("O que você deseja fazer? \n[1]: Deixar sua cidade e seu país, se tornando um refugiado. \n[2]: Continuar em sua cidade e em seu país, mesmo com poucas chances de sair vivo."))
    if(consequencia === 2){
       vida -= 100

       console.log("Você acaba ficando em sua cidade. Pouco tempo depois um bombardeio é enviado em direção ao seu bairro, porém você não tem para onde fugir, infelizmente, você acaba ficando no local do bombardeio, e não sobrevive.",)
       
       if(derrota() == true) {
        return ;
       }
   } else if(consequencia === 1){
        console.log(`Você deixa sua cidade natal, tornando-se um refugiado na Alemanha. \nVocê perdeu 10 pontos de vida. Vida atual: ${vida -= 10}`)        
    
    } 
   
   
   pergunta = prompt(`Você chega na alemanha e encontra o lugar onde você irá morar. É um local onde tem outros refugiados, você pode escolher entre dormir em um quarto com outro refugiado, ou em um quarto sozinho. \nAperte "Enter" para continuar.`)
   consequencia = Number(prompt("[1] Ter um colega de quarto \n[2] Não ter um colega de quarto."))
   if(consequencia === 1){
    acao1()
    if(vitoria() === true) { 
      return;
    } if(derrota() === true){
        return;
    }
   } else{
    acao2()
    if(vitoria() === true) { 
        return;
      } if(derrota() === true){
        return;
      }
   }
}

function acao1 (){
    console.log(`Você acaba virando amigo dele, descobrindo que ele pratica taekwondo, e luta muito bem.`)
    pergunta = prompt(`Alguns dias se passam, e você descobre que o nome do seu colega de quarto é Khalid, e que ele também é um refugiado da síria. \nAperte "enter" para continuar.`)
    pergunta = prompt(`No outro dia, você ve o Khalid lutando Taekwondo. Após ele acabar o treino, você fica encantado com o esporte e decide pergunta-lo se ele poderia ser seu professor de Taekwondo. \nAperte "Enter" para continuar.`)
    pergunta = prompt(`Khalid: - "Mas é claro, podemos começar semana que vem nosso treinamento!" \nVocê fica feliz com a notícia, e vai para casa pulando de alegria. (voce ganha mais 5 pontos de vida, vida atual: ${vida + 5})\nAperte "enter" para continuar.`)
    pergunta = prompt(`(Você coletou um kimono e uma faixa, ambos itens estão no seu inventario)`)
    inventario.push("kimono")
    inventario.push("faixa branca.")
    pergunta = prompt(`Deseja ver os itens do seu inventário?`)
    if(pergunta.toLowerCase() == "sim"){
        console.log(inventario)
    } 
    pergunta = prompt(`se passam alguns meses, e Khalid lhe diz: -"você é realmente muito bom, o que acha de começarmos um treinamento muito mais pesado para que você consiga participar de campeonatos?" \nAperte "enter" para continuar.`)
    pergunta = prompt(`Você gostou da ideia, e desde entao começam um treinamento muito pesado, em busca de começar a participar do profissional de taekwondo. \nAperte "enter" para continuar.`)
    pergunta = prompt(`Após 3 anos praticando e ganhando praticamente todo campeonato que participou, você ganhou a tão sonhada faixa preta. você vai participar de um campeonato no qual os melhores do país irão participar. \nAperte "enter" para continuar.`)
    pergunta = prompt(`(Faixa preta foi adicionada ao seu invetário).`)
        inventario.push("faixa preta")
    pergunta = prompt(`Deseja ver os itens do seu inventário?`)
    if(pergunta.toLowerCase() == "sim"){
        console.log(inventario)
    }
    pergunta = Number(prompt(`(Você chegou em um checkpoint, todo seu progresso até então, será salvo.`))
    
        checkpoint = 1 
    

    pergunta = prompt(`Nesse campeonato, você acaba machucando feio o seu ombro, e só poderá voltar a competir profissionalmente se fizer uma cirugia, que por acaso não é barata. \nAperte "enter" para continuar.`)
    let consequencia = Number(prompt(`Qual sua escolha? \n [1] Fazer a cirugia: \n[2] Não fazer a cirugia:`))
    

    if(consequencia === 1){
        cirugiaFeita()
    } else{ 
        cirugiaNaoFeita()
    }

}

function acao2(){
    console.log("Você vai para o seu quarto, guarda suas coisas e vai dormir, pois está bem cansado.")
    pergunta = prompt(`Você vai para o seu quarto, guarda suas coisas e vai dormir, pois está bem cansado.\nAperte "Enter" para continuar.`)
    pergunta = prompt(`Alguns dias se passam, e você conhece uma garota em uma festa.\nAperte "Enter" para continuar.`)
    pergunta = prompt(`Essa garota, era atleta olímpica, e após poucos minutos de conversa, você rapidamente se apaixonou por ela.\nAperte "Enter" para continuar.`)
    pergunta = prompt(`Porém, essa garota vivia do esporte, e a única chance de você ficar com ela, era atribuindo o mesmo estilo de vida para si mesmo.\nAperte "Enter" para continuar.`)
    pergunta = prompt(`(Você chegou em um checkpoint, todo progresso até então, será salvo.)`)
    checkpoint = 2
    let consequencia = Number(prompt(`Qual sua decisão? \n[1] Atribuir o estilo de vida, e ficar com a garota. \n[2] Não atribuir o estilo de vida, e não ficar com a garota.`))

    if(consequencia === 1){
      garota()
    } else{
        garotaNao()
    }

}

function cirugiaFeita() {
    pergunta = prompt(`A cirugia foi um sucesso! Você perde alguns meses se recuperando, pois não foi uma recuperação fácil. (você ganhou mais 50 pontos de vida. vida atual: ${vida += 50}) \nAperte "enter" para continuar.`)
    pergunta = prompt(`Após esses meses se recuperando, você vai ao médico para saber se já pode voltar a treinar. Felizmente, o médico diz que sim, você já pode voltar a praticar taekwondo. \nAperte "enter" para continuar.`)
    pergunta = prompt(`Você volta a praticar, passa um ano e enfim você pode finalmente voltar a competir, você começa a ganhar todos os campeonatos e está melhor do que nunca! \nAperte "enter" para continuar.`)
    pergunta = prompt(`Você é chamado para participar de um campeonato somente de refugiados, e recebe a notícia de que o ganhador será chamado para participar do time olímpico de refugiados!! \nAperte "enter" para continuar.`)
    pergunta = prompt(`Após receber essa notícia, você espera ansiosamente pelo campeonato, por que sabe que tem potencial suficiente para ganhar. \nAperte "enter" para continuar.`)
    pergunta = prompt(`O grande dia chega, e parabéns! você ganhou o campeonato e é chamado para o time olímpico de refugiados!!! (você ganhou 40 pontos de vida! vida atual: ${vida +=45})`)
    pergunta = prompt(`Você vai para as olimpíadas e BOOM! Você surpreende todos com sua habilidade, e ganha o primeiro lugar de taekwondo dos jogos olímpicos de 2024!!!`)
    pergunta = prompt(`Você ganhou medalha de ouro! deseja guarda-la em seu inventario?`)
        if(pergunta.toLowerCase() == "sim"){
            inventario.push("Medalha de ouro das olimpíadas")
        }
    pergunta = prompt(`Deseja abrir seu inventario e ver seus itens?`)
    if(pergunta.toLowerCase() == "sim"){
        console.log(inventario)
    }
    if(vitoria() === true){
        return true;
    }
}

function cirugiaNaoFeita() {
    pergunta = prompt(`Você opta por não fazer a cirugia e não volta mais a competir profissionalmente. Você vira professor de taekwondo e abre sua própria academia, mas desistindo de tentar realizar o sonho de ser um atleta olímpico. (Você perdeu todos os pontos de vida. ) vida atual: ${vida -= 10000}`)
  if(derrota() === true){
    return;
} 
}

function garota() {
   pergunta = prompt(`Você começa a treinar, entra em uma academia de taekwondo e com o tempo, começa a se apaixonar pelo esporte.\nAperte "Enter" para continuar.`)
   pergunta = prompt(`Você realmente gostou desse estilo de vida, e não está mais fazendo isso somente pela garota, e sim por você. \nAperte "Enter" para continuar.`)
   pergunta = prompt(`Com o tempo, vocês dois começam a ganhar vários campeonatos, e consequentemente começam a ficar famosos no cenário do esporte.\nAperte "Enter" para continuar.`)
   pergunta = prompt(`Infelizmente, você recebe a notícia de que ela terá que abandonar o seu sonho, pois vai se mudar. Ela lhe chama para ir junto com ela, e agora, você tem que tomar uma decisão difícil.\nAperte "Enter" para continuar.`)
   let consequencia = Number(prompt(`[1] Abandonar seu sonho e ir junto com a garota. \n[2] Deixar ela ir, e continuar com seu sonho.`))
    if(consequencia === 1){
        abandonarSonho()
    } else{
        seguirSonho()
    }
}
function seguirSonho(){
   pergunta = prompt(`A garota vai embora, e você põem na sua cabeça que você tem que seguir seu sonho, e se tornar um atleta olímpico por ela.\nAperte "Enter" para continuar.`)
   pergunta = prompt(`Ao chegar em casa, você percebe que ela deixou um presente para você, e esse presente era uma corrente.\nAperte "Enter" para continuar.`)
   pergunta = prompt(`Deseja guardar a corrente no seu inventario?`)
   if(pergunta.toLowerCase() === "sim"){
    inventario.push("corrente")
   } 
   pergunta = prompt(`deseja ver seu inventario?`)
   if(pergunta.toLowerCase() === "sim"){
    console.log(inventario)
   }
   pergunta = prompt(`Sua vida se torna somente treinamento, pois o único momento que você conseguia se distrarir, era treinando.\nAperte "Enter" para continuar`) 
   pergunta = prompt(`Você finalmente irá participar do campeonato final que irá convocar os melhores participantes para se tornarem atletas olímpicos.\nAperte "Enter" para continuar.`)
   pergunta = prompt(`Você vai, e ganha o campeonato, sendo finalmente convocado para participar das olímpiadas.\nAperte "Enter" para continuar.`)
   pergunta = prompt(`Quando chega o dia da sua primeira partida, você está nervoso, mas também está confiante.\nAperte "Enter" para continuar.`)
   pergunta = prompt(`Você consegue ganhar, não só a primeira, como todas as partidas. Você conseguiu a medalha de ouro!! `)
   vida += 100
   if(vitoria() === true){
    return true
   }
   
}


function abandonarSonho() {
    console.log(`Você decide ir junto com ela, formando uma familía e vivendo feliz. Porém abandonando seu sonho e não tendo mais chance de se tornar um atleta olímpico. (Você perdeu toda sua vida.)`)
    pergunta = prompt(`Você decide ir junto com ela, formando uma familía e vivendo feliz. Porém abandonando seu sonho e não tendo mais chance de se tornar um atleta olímpico. (Você perdeu toda sua vida.)`)
    vida -= 100
    if(derrota() === true){
        return true;
    }
}


function garotaNao() {
    pergunta = prompt(`Você decide não seguir o estilo de vida, consequentemente, você não começa a treinar e nem pensa nisso, logo, você perde todas as chances de se tornar um atleta olímpico. (você perdeu todos os pontos de vida.)`)
    vida -= 100
    if(derrota() === true){
        return true;
    }
}
function mostrarVida (){
     console.log(`vida atual: ${vida}`)
}

function vitoria() {
    if(vida >= 100){
        console.log(`Parabéns! você ganhou o jogo!`)
        return true;
    } else {
        return false;
    }
}

function derrota(){
 if(vida <= 0){
    console.log("Você perdeu todos os pontos de vida. Game Over")
    pergunta = Number(prompt(`Você perdeu o jogo, selecione: \n[1] para voltar ao último checkpoint. \n[2] Para recomeçar o jogo. \n[3]Para finalizar.`))
    switch(pergunta){ 
        case 1: 
            if(checkpoint == 1){
            acao1()
        } else if(checkpoint == 2){
            acao2()
        } 
        
        case 2:
        checkpoint = 0
        historia()
        break;

        case 3:
        checkpoint = 0
        return true;
} 
     
return true
     
    } else {
        return false
    }

}

historia()