import { btnSubmit, subscriberInput } from "../Domain/Elements.js";
import LocalStorage from "../Infrastructure/LocalStorage.js";

export default class Controller {

    private localStorage:LocalStorage = new LocalStorage();

    constructor() {
        subscriberInput;
        btnSubmit;

        this.index();
    }

    public index() : void
    {
        this.addListenerBtnSubmit();
    }

    public store(data:string) : void
    {
        this.localStorage.storeData(data);
    }

    private addListenerBtnSubmit() : void
    {
        btnSubmit.addEventListener('click', (e) => {
            if(!subscriberInput.value) {
                subscriberInput.placeholder = 'Please insert an email';
            }

            if(subscriberInput.value) {
                this.store(subscriberInput.value);
            }

            this.localStorage.getData();
        })
    }
}