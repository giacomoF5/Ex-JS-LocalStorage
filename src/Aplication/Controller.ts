import { btnSubmit, subscriberInput } from "../Domain/Elements.js";

export default class Controller {

    private subscriberInput: HTMLInputElement;
    private btnSubmit: HTMLButtonElement;

    constructor() {
        this.subscriberInput  = subscriberInput;
        this.btnSubmit = btnSubmit;

        this.index();
        this.store();
    }

    public index() : void
    {
        this.addListenerBtnSubmit();
    }

    public store() : void
    {
        
    }

    private addListenerBtnSubmit()
    {
        btnSubmit.addEventListener('click', (e) => {
            this.retrieveInputValue(subscriberInput.value);
        })
    }

    private retrieveInputValue(value:string) : string
        {
            if(!value) {
                subscriberInput.placeholder = 'Please insert an email';
            }

            return value;
        }
}