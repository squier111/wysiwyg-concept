import React from 'react';
import Context from './Context';
import useReducerWithMiddleware from './hooks';
import thunk from 'redux-thunk';
import { initialState, reducer } from './reducers';
import loggerBefore from '../utils/logger';

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducerWithMiddleware(reducer, initialState, [
    loggerBefore,
    thunk,
  ]);

  return (
    <Context.Provider value={{ store, dispatch }}>{children}</Context.Provider>
  );
};

export { StoreProvider };
