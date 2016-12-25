"use strict";
var passport_model_1 = require('./../models/passport.model');
var PassportController = (function () {
    /**
     *  ctor
     */
    function PassportController() {
        var _this = this;
        this._model = null;
        /**
         *  perform a login operation if the session is not logined yet; else do
         *  nothing
         *
         *  no matter what, it would return the underlying passportModel to the caller
         *  (however, could be null)
         */
        this.login = function () {
            var aLogin = _this._checkLoginFromLocalStorage();
            // TODO: should be aModel = new PassportModel(aLogin);
            _this._model = new passport_model_1.PassportModel('{ "userName": "guest-man" }');
            return _this._model;
        };
        /**
         *  check if any login information available under the localStorage;
         *  return either a login object OR
         *  return null (indicating no valid session info available)
         *
         *  PS. there is also an expiry check on a valid session
         *  (e.g. if the login is available, however the validity also expired,
         *  a re-login would be required)
         */
        this._checkLoginFromLocalStorage = function () {
            console.log('_checkLoginFromLocalStorage: to be implemented');
            return null;
        };
        this.isLogined = function () {
            var aValid = false;
            if (_this._model != null && _this._model) {
                // TODO: check expiry date
                aValid = true;
            }
            return aValid;
        };
    }
    return PassportController;
}());
exports.PassportController = PassportController;
//# sourceMappingURL=passport.controller.js.map