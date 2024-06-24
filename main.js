function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


// enquanto
while (contador < listaDeTeclas.length) {

    const instrumento = listaDeTeclas[contador].classList[1]
     
     console.log(instrumento);
    
    const idAudio = `#som_${instrumento}`;

   //console.log(idAudio);
    
    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    //console.log(contador);
}

