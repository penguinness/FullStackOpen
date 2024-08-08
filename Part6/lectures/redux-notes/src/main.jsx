import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import App from './App';

import noteReducer from './reducers/noteReducer';
import filterReducer from './reducers/filterReducer';

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
