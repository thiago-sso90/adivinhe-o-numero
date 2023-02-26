function vericaseevalido(chute){
    const numero = +chute

    if(chuteinvalido(numero)){
        if(chute.toUpperCase() === "GAME OVER"){
          Document.body.innerHTML = `
          <h2>GAME OVER!!!</h2>
          <h3>Click no botão para reiniciar o jogo</h3>
          <button id="jogar-de-novo" class="btn-reiniciar">Jogar novamente</button> 
          `
          document.body.style.backgroundColor = 'red';
        }else{
            elementochute.innerHTML += `<div>Valor invalido</div>`;
        
    
        }
    
    }

    if(numeroformaiorquepermitido(numero)) {
        elementochute.innerHTML+= `<div>valor inválido: o numero secreto precisa estar entre ${menorvalor} e ${maiorvalor}</div>`;
        return
    }

    if(numero===neumersecreto){

        document.body.innerHTML = `
        <h2>Voçe acertou<h2>
        <h3>O número secreto era ${neumersecreto}<h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if (numero > neumersecreto){
        elementochute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `

    }else 
        elementochute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    

}

    function chuteinvalido(numero){
        return Number.isNaN(numero)
    }
   

    function numeroformaiorquepermitido(numero){
        return numero > maiorvalor || numero < menorvalor

    }
document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }

})
