class Materializer {

    target = "";

    activated = false;

    constructor(target){
        this.target = target;
    }

    activate() {
        this.activated = true;
    }

    materialize() {
        let materialized;

        if (this.activated === true) {
            materialized = this.target;
        }

        return materialized;
    }

}

let myMaterializer = new Materializer("Fred");

console.log("Materialzer befre activation: " + myMaterializer.materialize());


myMaterializer.activate();

console.log("Materialzer after activation: " + myMaterializer.materialize());

