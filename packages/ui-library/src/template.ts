import { VNode, h } from 'snabbdom';
import { ui } from 'ui-library';
type State = {
  count: number;
};

type Props = {};

export function createTemplate(): (state: State, props: Props) => VNode {
  return function (state: State, props: Props): VNode {
    return h('div', [
      h('h1', `Count: ${state.count}`),
      h('button', { on: { click: increment } }, 'Add'),
    ]);
  };
}

function increment() {
  // Retrieve the current state using getState method from ui-library
  const currentState = ui.getState();

  // Update the state by incrementing the count
  ui.updateState({ count: currentState.count + 1 });
}
