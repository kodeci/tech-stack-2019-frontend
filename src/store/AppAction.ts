import { CounterDecrementAction, CounterIncrementAction } from 'DUCKS/counter';

const UNKNOWN = 'UNKNOWN';

export interface UnknownAction {
  type: typeof UNKNOWN;
}

export const unknown = (): UnknownAction => ({
  type: UNKNOWN,
});

type AppAction =
  | CounterDecrementAction
  | CounterIncrementAction
  | UnknownAction;

export default AppAction;
