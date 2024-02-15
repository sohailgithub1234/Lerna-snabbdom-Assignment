"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUpdateListener = exports.addMountListener = void 0;
var mountListeners = [];
var updateListeners = [];
function addMountListener(listener) {
    mountListeners.push(listener);
}
exports.addMountListener = addMountListener;
function addUpdateListener(listener) {
    updateListeners.push(listener);
}
exports.addUpdateListener = addUpdateListener;
// Call mount listeners
mountListeners.forEach(function (listener) { return listener(); });
// Example of triggering update listeners
updateListeners.forEach(function (listener) { return listener(); });
