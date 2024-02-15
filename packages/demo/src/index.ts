import { h, init, VNode } from 'snabbdom';

// Initialize Snabbdom
const patch = init([]);

// Assuming you have created a vnode using Snabbdom
const vnode: VNode = h('div', 'Hello, Snabbdom!');

// Assuming you have a container element in your HTML with id="app"
const container = document.getElementById('app');

// Applying changes to the real DOM using Snabbdom's patch function
if (container) {
  patch(container, vnode);
}
