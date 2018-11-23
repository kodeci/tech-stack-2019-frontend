import React, { PureComponent } from 'react';
import { QueryResult } from 'react-apollo';
import { HelloData } from '../Hello';

class HelloView extends PureComponent<QueryResult<HelloData>> {
  public render() {
    const { error, loading, data: { hello }} = this.props;
    if (loading) { return <div>fetching</div>; }
    if (error) { return <div>errored</div>; }
    return (
      <div>hello {hello}</div>
    );
  }
}

export default HelloView;
