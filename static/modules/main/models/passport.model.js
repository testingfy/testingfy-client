"use strict";
var PassportModel = (function () {
    /**
     *  ctor. parse the given model string into a valid JSON-fy Object
     */
    function PassportModel(model) {
        var _this = this;
        this.get = function (key) {
            return _this._model[key];
        };
        this.set = function (key, value) {
            _this._model[key] = value;
        };
        /**
         *  return the underlying model; this is handy when attributes of the
         *  passportModel has been updated, hence would require a flush to the
         *  local storage
         */
        this.getModel = function () {
            return _this._model;
        };
        if (model != null && model) {
            this._model = JSON.parse(model);
        } // end -- if
    }
    return PassportModel;
}());
exports.PassportModel = PassportModel;
//# sourceMappingURL=passport.model.js.map