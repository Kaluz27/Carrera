import Dado from "./dado.js";

class Main {
    constructor(){
        let btn = document.querySelector("#btn");
        btn.addEventListener("click", this.generar);

    }

    generar(){
        let primerDado = new Dado();
        let contador = [0,0,0,0,0,0];

        for(let i =0; i<100; i++ ){
            let cara= primerDado.lanzar();
            contador[cara-1]++;
        }
        for(let j=1; j<7; i++){
            console.log(`EL número en la pocosión ${j} cayo: ${contador[j-1]}`)
        }
    }
}