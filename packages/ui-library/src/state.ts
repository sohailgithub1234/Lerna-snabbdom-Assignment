type State = {
    count: number;
  };
  
  export function createState(initialState: State) {
    let state = { ...initialState };
  
    return {
      getState() {
        return state;
      },
      setState(newState: Partial<State>) {
        state = { ...state, ...newState };
      },
    };
  }
  
  export function updateState(stateManager: ReturnType<typeof createState>, newState: Partial<State>) {
    stateManager.setState(newState);
  }
  