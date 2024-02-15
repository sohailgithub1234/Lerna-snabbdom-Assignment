"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var snabbdom_1 = require("snabbdom");
// Initialize Snabbdom
var patch = (0, snabbdom_1.init)([]);
// Assuming you have created a vnode using Snabbdom
var vnode = (0, snabbdom_1.h)('div', 'Hello, Snabbdom!');
// Assuming you have a container element in your HTML with id="app"
var container = document.getElementById('app');
// Applying changes to the real DOM using Snabbdom's patch function
if (container) {
    patch(container, vnode);
}
