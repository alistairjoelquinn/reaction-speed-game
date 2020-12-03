import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import App from './app';
import Reducer from '../store/reducer';

const store = createStore(
    Reducer, composeWithDevTools(
        applyMiddleware(ReduxThunk)
    )
);

const elem = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(elem, document.querySelector('main'));