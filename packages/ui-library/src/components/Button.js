"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var utils_1 = require("../utils");
var Button = /** @class */ (function () {
    function Button(state, callbacks) {
        this.state = state;
        this.callbacks = callbacks;
    }
    Button.prototype.render = function () {
        var _this = this;
        var button = document.createElement('button');
        button.textContent = 'Add';
        button.addEventListener('click', function () {
            _this.state.count++;
            (0, utils_1.logUpdate)();
            _this.callbacks.onUpdate && _this.callbacks.onUpdate();
        });
        return button;
    };
    return Button;
}());
exports.Button = Button;
