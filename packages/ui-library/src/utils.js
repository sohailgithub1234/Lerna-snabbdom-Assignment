"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logUpdate = exports.logMount = void 0;
function logMount() {
    console.log('Component mounted');
}
exports.logMount = logMount;
function logUpdate() {
    console.log('State changed');
}
exports.logUpdate = logUpdate;
