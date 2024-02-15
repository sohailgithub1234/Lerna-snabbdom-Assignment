"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
var Counter = /** @class */ (function () {
    function Counter(state, callbacks) {
        this.state = state;
        this.callbacks = callbacks;
    }
    Counter.prototype.render = function () {
        var h1 = document.createElement('h1');
        h1.textContent = this.state.count.toString();
        this.callbacks.onMount && this.callbacks.onMount();
        return h1;
    };
    return Counter;
}());
exports.Counter = Counter;
