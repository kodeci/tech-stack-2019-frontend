import React, { PureComponent } from 'react';
import { DispatchProps, StateProps } from '../Hello';

interface HelloViewProps extends DispatchProps, StateProps  {
}

class Hello extends PureComponent<HelloViewProps> {
  public async componentDidMount() {
    const { helloFetch } = this.props;
    helloFetch();
  }

  public render() {
    const { errored, hello, requested } = this.props;
    if (requested) { return <div>fetching</div>; }
    if (errored) { return <div>errored</div>; }
    return <div>hello {hello}</div>;
  }
}

export default Hello;
