"use strict";
// ui-library/src/index.ts
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ui = void 0;
var Button_1 = require("./components/Button");
var Counter_1 = require("./components/Counter");
// Define the initial state
var state = {
    count: 0,
};
// Function to update the state
function updateState(newState) {
    state = __assign(__assign({}, state), newState);
}
// Function to get the current state
function getState() {
    return state;
}
// Initialize function to set up the UI library
function init() {
    // Callbacks for lifecycle events
    var callbacks = {
        onMount: function () { return console.log('Component mounted'); },
        onUpdate: function () { return console.log('State changed'); },
    };
    // Create instances of components
    var counterComponent = new Counter_1.Counter(getState(), callbacks);
    var buttonComponent = new Button_1.Button(getState(), callbacks);
    // Get the element to mount components
    var appElement = document.getElementById('app');
    if (appElement) {
        // Mount components to the DOM
        appElement.appendChild(counterComponent.render());
        appElement.appendChild(buttonComponent.render());
    }
}
// Export the 'ui' object with the 'init', 'updateState', and 'getState' functions
var ui = {
    init: init,
    updateState: updateState,
    getState: getState,
};
exports.ui = ui;
