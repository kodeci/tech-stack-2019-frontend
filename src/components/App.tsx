import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Counter from './Counter';
import Hello from './Hello';

const App = () => (
  <Provider store={store}>
    <div>
      <Hello />
      <Counter />
    </div>
  </Provider>
);

export default App;
