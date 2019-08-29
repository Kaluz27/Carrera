export default class Dado {
    constructor(){

    }
    lanzar(){
        let num;
        num= Math.trunc(Math.random()*6+1);
        return num
    }
}