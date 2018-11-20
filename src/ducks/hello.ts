import { combineReducers, Dispatch } from 'redux';
import AppAction from 'STORE/AppAction';
import AppState from 'STORE/AppState';

const API = 'http://localhost:3000';

// ACTIONS
const HELLO_FETCH_REQUEST = 'HELLO_FETCH_REQUEST';

const HELLO_FETCH_RESPONSE = 'HELLO_FETCH_RESPONSE';

export interface HelloFetchRequestAction {
  type: typeof HELLO_FETCH_REQUEST;
}

export interface HelloFetchResponseAction {
  type: typeof HELLO_FETCH_RESPONSE;
  payload: string;
  error?: boolean;
}

const helloFetchRequest = (): HelloFetchRequestAction => ({
  type: HELLO_FETCH_REQUEST,
});

const helloFetchResponse = (
  payload: string,
  error?: boolean,
): HelloFetchResponseAction =>
  error
    ? {
        error: true,
        payload,
        type: HELLO_FETCH_RESPONSE,
      }
    : {
        payload,
        type: HELLO_FETCH_RESPONSE,
      };

export const helloFetch = () => async (dispatch: Dispatch<AppAction>) => {
  dispatch(helloFetchRequest());
  try {
    const response = await fetch(API);
    const { hello } = await response.json();
    dispatch(helloFetchResponse(hello));
  } catch {
    dispatch(helloFetchResponse('500', true));
  }
};

// STATE
export interface HelloState {
  errored: boolean;
  requested: boolean;
  value: string;
}

const helloInitialState = {
  errored: false,
  requested: false,
  value: '',
};

// REDUCER
const requested = (state: boolean = helloInitialState.requested, action: AppAction) => {
  switch (action.type) {
    case HELLO_FETCH_REQUEST:
      return true;
    case HELLO_FETCH_RESPONSE:
      return false;
    default:
      return state;
  }
};

const value = (state: string = helloInitialState.value, action: AppAction) => {
  switch (action.type) {
    case HELLO_FETCH_RESPONSE:
      if (action.error) {
        return state;
      }
      return action.payload;
    default:
      return state;
  }
};

const errored = (state: boolean = helloInitialState.errored, action: AppAction) => {
  switch (action.type) {
    case HELLO_FETCH_REQUEST:
      return false;
    case HELLO_FETCH_RESPONSE:
      return action.error ? true : false;
    default:
      return state;
  }
};

export default combineReducers({
  errored,
  requested,
  value,
});

// SELECTORS
export const helloGetRequested = (state: AppState) => state.hello.requested;

export const helloGetError = (state: AppState) => state.hello.errored;

export const helloGet = (state: AppState) => state.hello.value;
