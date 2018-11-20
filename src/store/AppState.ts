import { CounterState } from 'DUCKS/counter';
import { HelloState } from 'DUCKS/hello';

export default interface AppState {
  counter: CounterState;
  hello: HelloState;
}
