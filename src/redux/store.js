import {
    applyMiddleware,
    createStore,
    compose
  } from 'redux';

  import * as reduxLoop from 'redux-loop-symbol-ponyfill';

import middleware from './middleware';
import reducer from './reducer';

const enhancers = [
    applyMiddleware(...middleware),
    reduxLoop.install()
  ];

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(...enhancers);

const store = createStore(
  reducer,
  null,
  enhancer
);

// Store
export default store;
