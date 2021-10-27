import { btnSubmit, subscriberInput } from "../Domain/Elements.js";
import LocalStorage from "../Infrastructure/LocalStorage.js";
var Controller = /** @class */ (function () {
    function Controller() {
        this.localStorage = new LocalStorage();
        subscriberInput;
        btnSubmit;
        this.index();
    }
    Controller.prototype.index = function () {
        this.addListenerBtnSubmit();
        this.localStorage.getData();
    };
    Controller.prototype.store = function (data) {
        this.localStorage.storeData(data);
    };
    Controller.prototype.addListenerBtnSubmit = function () {
        var _this = this;
        btnSubmit.addEventListener('click', function (e) {
            if (!subscriberInput.value) {
                subscriberInput.placeholder = 'Please insert an email';
            }
            if (subscriberInput.value) {
                _this.store(subscriberInput.value);
            }
            _this.localStorage.getData();
        });
    };
    return Controller;
}());
export default Controller;
