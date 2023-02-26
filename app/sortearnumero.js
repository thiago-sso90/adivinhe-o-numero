const menorvalor = 1;
const maiorvalor = 1000;
const neumersecreto = gerarnumeroaleatorio()

function gerarnumeroaleatorio(){
    return parseInt(Math.random() * maiorvalor + 1)
}

console.log('numero secreto',neumersecreto);

const elementomenorvalor = document.getElementById('menor-valor');
elementomenorvalor.innerHTML = menorvalor;

const elementomaiorvalor = document.getElementById('maior-valor');
elementomaiorvalor.innerHTML = maiorvalor;