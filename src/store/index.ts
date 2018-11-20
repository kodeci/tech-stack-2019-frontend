import counter from 'DUCKS/counter';
import hello from 'DUCKS/hello';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

const reducers = combineReducers({
  counter,
  hello,
});

const middlewares = [reduxThunk];

const enhancer = compose(
  applyMiddleware(...middlewares),
  (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f,
);

export default createStore(reducers, enhancer);
