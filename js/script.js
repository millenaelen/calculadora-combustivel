const btnCalcular = document.querySelector('#btnCalcular');
const precoEtanol = document.querySelector('#precoEtanol');
const precoGasolina = document.querySelector('#precoGasolina');
const infoVantagem = document.querySelector('#vantagem');


function calcularCombustivel() {
    //console.log('funcao acionada');

    if (precoEtanol.value !='' && precoGasolina.value !=''){

        let valorEtanol = parseFloat(precoEtanol.value);
        let valorGasolina = parseFloat(precoGasolina.value);
        //console.log(valorEtanol);

        let resultado = valorEtanol/valorGasolina;
        //console.log(resultado);

        let vantagem = '';

        if (resultado<=0.71){
            vantagem = 'Abasteça com Álcool';
        }

        else{
            vantagem = 'Abasteça com Gasolina';
        }

        infoVantagem.innerHTML = vantagem;
    }

    else{
        alert('Preencha todos os campos');
    }

}

btnCalcular.addEventListener('click', calcularCombustivel);
