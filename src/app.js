import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //Crear todas las combinaciones posibles con los arrays disponibles y su dominio unico. 
  // Ej: thegreatjogger.com

  let pronoun = ['the', 'our'];
  let adjetivo = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  const dominio = () => {
    for (let pro of pronoun){
        for(let adj of adjetivo){
          for(let n of noun){
            return `${pro}${adj}${n}.com`
          }
        }
    }
  }

  let dom = document.querySelector(".dominio")
  dom.innerHTML = dominio()
  
};
