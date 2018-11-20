import { CounterDecrementAction, CounterIncrementAction } from 'DUCKS/counter';
import { HelloFetchRequestAction, HelloFetchResponseAction } from 'DUCKS/hello';

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
  | HelloFetchRequestAction
  | HelloFetchResponseAction
  | UnknownAction;

export default AppAction;
