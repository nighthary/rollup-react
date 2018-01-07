
import {
    loop,
    combineReducers
  } from 'redux-loop-symbol-ponyfill';
import { Map, fromJS } from 'immutable';

import TestReducer from '../reducer/TestState';

const reducers = {
    test: TestReducer
}

const immutableStateContainer = Map();
const getImmutable = (child, key) => child ? child.get(key) : void 0;
const setImmutable = (child, key, value) => child.set(key, value);

const namespacedReducer = combineReducers(
  reducers,
  immutableStateContainer,
  getImmutable,
  setImmutable
);

export default function mainReducer(state, action) {
  const [nextState, effects] = namespacedReducer(state || void 0, action);

  // enforce the state is immutable
  return loop(fromJS(nextState), effects);
}