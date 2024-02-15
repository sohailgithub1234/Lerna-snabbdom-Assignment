"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTemplate = void 0;
var snabbdom_1 = require("snabbdom");
var ui_library_1 = require("ui-library");
function createTemplate() {
    return function (state, props) {
        return (0, snabbdom_1.h)('div', [
            (0, snabbdom_1.h)('h1', "Count: ".concat(state.count)),
            (0, snabbdom_1.h)('button', { on: { click: increment } }, 'Add'),
        ]);
    };
}
exports.createTemplate = createTemplate;
function increment() {
    // Retrieve the current state using getState method from ui-library
    var currentState = ui_library_1.ui.getState();
    // Update the state by incrementing the count
    ui_library_1.ui.updateState({ count: currentState.count + 1 });
}
