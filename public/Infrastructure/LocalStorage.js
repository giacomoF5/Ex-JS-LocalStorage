var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
    }
    LocalStorage.prototype.getData = function () {
        console.clear();
        for (var index = 0; index < localStorage.length; index++) {
            console.log(localStorage.getItem(index.toString()));
        }
    };
    LocalStorage.prototype.storeData = function (data) {
        localStorage.setItem(this.generatorId(), data);
    };
    LocalStorage.prototype.generatorId = function () {
        return localStorage.length.toString();
        // return '_' + Math.random().toString(36).substr(2, 9);
    };
    return LocalStorage;
}());
export default LocalStorage;
