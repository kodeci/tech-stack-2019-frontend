import React, { PureComponent } from 'react';

const API = 'http://localhost:3000';

class App extends PureComponent {
  public state = {
    errored: false,
    fetching: false,
    hello: '',
    route: 'hello',
  };

  private content: JSX.Element;

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
    if (route === 'hello') { this.content = <div>hello {hello}</div>; }
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
        {this.content}
      </div>
    );
  }

  private handleHelloClick = () => this.setState({ route: 'hello' });

  private handleChartAClick = async () => {
    const { default: ChartA } = await import('./ChartA');
    this.content = <div><ChartA /></div>;
    this.setState({ route: 'charta' });
  }

  private handleChartBClick = async () => {
    const { default: ChartB } = await import('./ChartB');
    this.content = <div><ChartB /></div>;
    this.setState({ route: 'chartb' });
  }
}

export default App;
