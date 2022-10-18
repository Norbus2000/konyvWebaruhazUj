import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KonyvekPublicView from "../View/konyvekPublicView.js";

class KonyvController {
    constructor() {
        const konyvmodel = new KonyvModel();
        konyvmodel.adatBe("../adat.json", this.konyvAdatokAdmin);
        konyvmodel.adatBe("../adat.json", this.konyvAdatokPublic);
        $(window).on("torol", (event) =>{
            konyvmodel.onTorles(event.detail)
        })
        $(window).on("modosit", (event) =>{
            konyvmodel.onModosit(event.detail)
        })
    }

    konyvAdatokAdmin(tomb) {
        let szuloelem=$(".admin");
        new KonyvekView(tomb,szuloelem);
    }

    konyvAdatokPublic(tomb) {
        let szuloelem=$(".public");
        new KonyvekPublicView(tomb,szuloelem);
    }

}

export default KonyvController;