import AppAction from '../store/AppAction';
import AppState from '../store/AppState';

// ACTIONS
const COUNTER_INCREMENT = 'COUNTER_INCREMENT';

const COUNTER_DECREMENT = 'COUNTER_DECREMENT';

export interface CounterIncrementAction {
  type: typeof COUNTER_INCREMENT;
}

export interface CounterDecrementAction {
  type: typeof COUNTER_DECREMENT;
}

export const counterIncrement = (): CounterIncrementAction => ({
  type: COUNTER_INCREMENT,
});

export const counterDecrement = (): CounterDecrementAction => ({
  type: COUNTER_DECREMENT,
});

// STATE
export type CounterState = number;

const counterInitialState = 0;

// REDUCER
export default (state: number = counterInitialState, action: AppAction) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + 1;
    case COUNTER_DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// SELECTORS
export const counterGet = (state: AppState) => {
  return state.counter;
};
