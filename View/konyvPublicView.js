class KonyvPublicView {
    #elem
    constructor(elem, szuloElem) {
        this.#elem=elem
        szuloElem.append(`
        <div>
            <h2>A könyv címe ${elem.cim}</h2>
            <h3>Szerző: ${elem.szerzo}</h3>
            <p>Ár: ${elem.ar}</p>
            <button class="kosar" >Kosárba</button>
        </div>
`)
}
}
export default KonyvPublicView;