import { createNote } from './reducers/noteReducer';
import { filterChange } from './reducers/filterReducer';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

import noteReducer from './reducers/noteReducer';

import filterReducer from './reducers/filterReducer';

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
});

const store = createStore(reducer);

console.log(store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

store.subscribe(() => console.log(store.getState()));
store.dispatch(filterChange('IMPORTANT'));
store.dispatch(
  createNote('combineReducers forms one reducer from many simple reducers')
);
