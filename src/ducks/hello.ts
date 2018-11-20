import AppAction from 'STORE/AppAction';

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

export const helloFetch = () => async (dispatch: any) => {
  const response = await fetch(API);
  const { hello } = await response.json();
};
/*
// TODO: DISPATCH
export const helloFetch = () => async (dispatch: (action: AppAction) => void) => {
  dispatch(fetchTodosRequest());
  try {
    const json = await fromTodos.fetchTodos();
    const reducer = (accumulator: List<Todo>, jsonTodo: TodoJS) =>
      accumulator.push(new Todo(jsonTodo));
    const todos = json.reduce(reducer, List<Todo>([])) as List<Todo>;
    dispatch(fetchTodosResponse(todos));
  } catch {
    dispatch(fetchTodosResponse('500', true));
  }
};
*/

/*
import * as fromTodos from 'APIS/todos';
import { List, Map } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createSelector } from 'reselect';
import AppAction from 'STORE/AppAction';
import AppState from 'STORE/AppState';
import Todo, { TodoJS } from './Todo';

export const fetchTodos = () => async (dispatch: (action: AppAction) => void) => {
  dispatch(fetchTodosRequest());
  try {
    const json = await fromTodos.fetchTodos();
    const reducer = (accumulator: List<Todo>, jsonTodo: TodoJS) =>
      accumulator.push(new Todo(jsonTodo));
    const todos = json.reduce(reducer, List<Todo>([])) as List<Todo>;
    dispatch(fetchTodosResponse(todos));
  } catch {
    dispatch(fetchTodosResponse('500', true));
  }
};

// REDUCER
const requested = (state: boolean, action: AppAction) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return true;
    case FETCH_TODOS_RESPONSE:
      return false;
    default:
      return state;
  }
};

const byId = (state: Map<number, Todo>, action: AppAction) => {
  switch (action.type) {
    case FETCH_TODOS_RESPONSE:
      if (action.error) {
        return state;
      }
      const reducer = (accumulator: Map<number, Todo>, todo: Todo) =>
        accumulator.set(todo.get('id'), todo);
      const payload = action.payload as List<Todo>;
      return payload.reduce(reducer, state);
    default:
      return state;
  }
};

const ids = (state: List<number>, action: AppAction) => {
  switch (action.type) {
    case FETCH_TODOS_RESPONSE:
      if (action.error) {
        return state;
      }
      const payload = action.payload as List<Todo>;
      return List(payload.map((o: Todo) => o.get('id')));
    default:
      return state;
  }
};

const errored = (state: boolean, action: AppAction) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return false;
    case FETCH_TODOS_RESPONSE:
      return action.error ? true : false;
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  errored,
  ids,
  requested,
});

// SELECTORS
export const getTodosRequested = (state: AppState) => state.get('todos').get('requested');

export const getTodosError = (state: AppState) => state.get('todos').get('errored');

export const getTodo = (state: AppState, id: number) => {
  return state
    .get('todos')
    .get('byId')
    .get(id);
};

const getTodosById = (state: AppState) => state.get('todos').get('byId');

const getTodosIds = (state: AppState) => state.get('todos').get('ids');

export const getTodos = createSelector(
  [getTodosById, getTodosIds],
  (pById, pIds) => pIds.map(o => pById.get(o)) as List<Todo>
);
*/
