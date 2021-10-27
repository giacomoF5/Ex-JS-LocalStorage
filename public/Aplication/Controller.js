import { btnSubmit, subscriberInput } from "../Domain/Elements.js";
var Controller = /** @class */ (function () {
    function Controller() {
        this.subscriberInput = subscriberInput;
        this.btnSubmit = btnSubmit;
        this.index();
        this.store();
    }
    Controller.prototype.index = function () {
        this.addListenerBtnSubmit();
    };
    Controller.prototype.store = function () {
    };
    Controller.prototype.addListenerBtnSubmit = function () {
        var _this = this;
        btnSubmit.addEventListener('click', function (e) {
            _this.retrieveInputValue(subscriberInput.value);
        });
    };
    Controller.prototype.retrieveInputValue = function (value) {
        if (!value) {
            subscriberInput.placeholder = 'Please insert an email';
        }
        return value;
    };
    return Controller;
}());
export default Controller;
