import { logUpdate } from '../utils';
import { State, LifecycleCallbacks, Component } from '../types';

export class Button implements Component {
    private state: State;
    private callbacks: LifecycleCallbacks;

    constructor(state: State, callbacks: LifecycleCallbacks) {
        this.state = state;
        this.callbacks = callbacks;
    }

    render(): HTMLButtonElement {
        const button = document.createElement('button');
        button.textContent = 'Add';
        button.addEventListener('click', () => {
            this.state.count++;
            logUpdate();
            this.callbacks.onUpdate && this.callbacks.onUpdate();
        });
        return button;
    }
}
