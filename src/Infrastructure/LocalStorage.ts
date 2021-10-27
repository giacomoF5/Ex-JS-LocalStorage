
export default class LocalStorage {

    constructor() {

    }

    public getData() : void
    {
        console.clear();
        for (let index = 0; index < localStorage.length; index++) {
            console.log(localStorage.getItem(index.toString()));
        }
    }

    public storeData(data: string): void 
    {
        localStorage.setItem( this.generatorId(), data);
    }

    private generatorId() : string
    {
        return localStorage.length.toString();
        // return '_' + Math.random().toString(36).substr(2, 9);
    }

}