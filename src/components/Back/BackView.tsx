import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

class BackView extends PureComponent<RouteComponentProps> {

  public render() {
    return (
      <div>
        <a
          href="#"
          onClick={this.handleBackClick}
        >
          Back
        </a>
      </div>
    );
  }

  private handleBackClick = () => {
    const { history } = this.props;
    history.goBack();
  }
}

export default BackView;
