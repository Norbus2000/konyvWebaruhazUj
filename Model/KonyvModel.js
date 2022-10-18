class KonyvModel {
    #konyvekTomb = [];

    constructor() {
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                this.#konyvekTomb = data.konyv;
                console.log(this.#konyvekTomb);
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    onTorles(){
        console.log("torlok");
    }
    onModosit(){
        console.log("modositok");
    }
}

export default KonyvModel;