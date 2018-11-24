import React, { PureComponent } from 'react';
import { QueryResult } from 'react-apollo';
import { HelloData, Mutations} from '../Hello';

interface HelloViewProps extends Mutations, QueryResult<HelloData> {
}

class HelloView extends PureComponent<HelloViewProps> {
  public render() {
    const {
      counterDecrement,
      counterIncrement,
      error,
      loading,
      data: { counter, hello },
    } = this.props;
    if (loading) { return <div>fetching</div>; }
    if (error) { return <div>errored</div>; }
    return (
      <div>
        <div>hello {hello}</div>
        <div>{counter.toString()}</div>
        <div>
          <button type="button" onClick={counterDecrement}>-</button>
          <button type="button" onClick={counterIncrement}>+</button>
        </div>
      </div>
    );
  }
}

export default HelloView;
