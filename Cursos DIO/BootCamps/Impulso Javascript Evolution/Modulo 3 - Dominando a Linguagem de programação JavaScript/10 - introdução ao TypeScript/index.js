"use strict";
exports.__esModule = true;
var jquery_1 = require("jquery");
jquery_1["default"].fn.extend({
    novaFuncao: function () {
        console.log('Chamou nova funcao');
    }
});
(0, jquery_1["default"])('body').novaFuncao();
