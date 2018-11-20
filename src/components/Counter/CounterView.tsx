import React, { PureComponent } from 'react';
import { DispatchProps, StateProps } from '../Counter';

interface CounterViewProps extends DispatchProps, StateProps  {
}

class CounterView extends PureComponent<CounterViewProps> {
  public render() {
    const { counter, counterDecrement, counterIncrement } = this.props;
    return (
      <div>
        <div>{counter}</div>
        <button type="button" onClick={counterIncrement}>+</button>
        <button type="button" onClick={counterDecrement}>-</button>
      </div>
    );
  }
}

export default CounterView;
