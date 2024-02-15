const mountListeners: (() => void)[] = [];
const updateListeners: (() => void)[] = [];

export function addMountListener(listener: () => void) {
  mountListeners.push(listener);
}

export function addUpdateListener(listener: () => void) {
  updateListeners.push(listener);
}

// Call mount listeners
mountListeners.forEach(listener => listener());

// Example of triggering update listeners
updateListeners.forEach(listener => listener());
