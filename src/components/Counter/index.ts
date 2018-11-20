import {
  counterDecrement,
  counterIncrement,
  CounterState,
  getCounter,
} from 'DUCKS/counter';
import { connect } from 'react-redux';
import AppState from 'STORE/AppState';
import CounterView from './CounterView';

export interface StateProps {
  counter: CounterState;
}

export interface DispatchProps {
  counterDecrement(): void;
  counterIncrement(): void;
}

const mapStateToProps = (state: AppState) => ({
  counter: getCounter(state),
});

const mapDispatchToProps = {
  counterDecrement,
  counterIncrement,
};

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(CounterView);
