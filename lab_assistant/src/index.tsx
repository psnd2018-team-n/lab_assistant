import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from  'react-redux';

import Reducers from './reducer';
import App from './container/App/App';

const store = createStore(Reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
