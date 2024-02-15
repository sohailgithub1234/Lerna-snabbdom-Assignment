// ui-library/src/index.ts

import { State, LifecycleCallbacks, Component } from './types';
import { Button } from './components/Button';
import { Counter } from './components/Counter';

// Define the initial state
let state: State = {
    count: 0,
};

// Function to update the state
function updateState(newState: State): void {
    state = { ...state, ...newState };
}

// Function to get the current state
function getState(): State {
    return state;
}

// Initialize function to set up the UI library
function init(): void {
    // Callbacks for lifecycle events
    const callbacks: LifecycleCallbacks = {
        onMount: () => console.log('Component mounted'),
        onUpdate: () => console.log('State changed'),
    };

    // Create instances of components
    const counterComponent: Component = new Counter(getState(), callbacks);
    const buttonComponent: Component = new Button(getState(), callbacks);

    // Get the element to mount components
    const appElement = document.getElementById('app');
    if (appElement) {
        // Mount components to the DOM
        appElement.appendChild(counterComponent.render());
        appElement.appendChild(buttonComponent.render());
    }
}

// Export the 'ui' object with the 'init', 'updateState', and 'getState' functions
const ui = {
    init,
    updateState,
    getState,
};

export { ui };
