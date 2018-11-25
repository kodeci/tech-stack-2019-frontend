import React, { PureComponent } from 'react';
import ChartA from './ChartA';
import ChartB from './ChartB';

const API = 'http://localhost:3000';

class App extends PureComponent {
  public state = {
    errored: false,
    fetching: false,
    hello: '',
    route: 'hello',
  };

  public async componentDidMount() {
    try {
      const response = await fetch(API);
      const { hello } = await response.json();
      this.setState({
        fetching: false,
        hello,
      });
    } catch (err) {
      this.setState({ errored: true });
    }
  }

  public render() {
    const { errored, fetching, hello, route } = this.state;
    if (fetching) { return <div>fetching</div>; }
    if (errored) { return <div>errored</div>; }
    let content: JSX.Element;
    switch (route) {
      case 'charta':
        content = <ChartA />;
        break;
      case 'chartb':
        content = <ChartB />;
        break;
      default:
        content = <div>hello {hello}</div>;
    }
    return (
      <div>
        <div>
          <button
            disabled={route === 'hello'}
            onClick={this.handleHelloClick}
          >
            Hello
          </button>
          <button
            disabled={route === 'charta'}
            onClick={this.handleChartAClick}
          >
            ChartA
          </button>
          <button
            disabled={route === 'chartb'}
            onClick={this.handleChartBClick}
          >
            ChartB
          </button>
        </div>
        {content}
      </div>
    );
  }

  private handleHelloClick = () => this.setState({ route: 'hello' });

  private handleChartAClick = () => this.setState({ route: 'charta' });

  private handleChartBClick = () => this.setState({ route: 'chartb' });
}

export default App;
