import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Reducers from './reducer';
import App from './container/App/App';

const store = createStore(Reducers);

// プロトタイプ書き換え
Array.prototype.contain = function contain(e) {
  return this.indexOf(e) !== -1;
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
