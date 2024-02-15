import { logMount } from '../utils';
import { State, LifecycleCallbacks, Component } from '../types';

export class Counter implements Component {
    private state: State;
    private callbacks: LifecycleCallbacks;

    constructor(state: State, callbacks: LifecycleCallbacks) {
        this.state = state;
        this.callbacks = callbacks;
    }

    render(): HTMLHeadingElement {
        const h1 = document.createElement('h1');
        h1.textContent = this.state.count.toString();
        this.callbacks.onMount && this.callbacks.onMount();
        return h1;
    }
}
