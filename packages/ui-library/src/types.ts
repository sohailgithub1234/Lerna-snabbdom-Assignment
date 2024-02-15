// ui-library/src/types.ts

export interface State {
    count: number;
}

export interface LifecycleCallbacks {
    onMount?: () => void;
    onUpdate?: () => void;
}

export interface Component {
    render: () => HTMLElement;
}
