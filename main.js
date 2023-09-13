function tocaSompom (idElementoAudio) {
 document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorALL('.tecla');

//para 
for (let contador = 0; Contador <ListaDeTeclas.length;contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = teclas.classlist[1]
    const idAudio = 'Som_&(instrumento)';

  
    teclas.onclick = function (){
          tocaSom(idAudio)
    }

    console.log(contador);

}
