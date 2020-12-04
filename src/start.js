import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import App from './app';
import GameReducer from '../store/game/reducer';
import SocketReducer from '../store/socket/reducer';

const rootReducer = combineReducers({
    game: GameReducer,
    socket: SocketReducer
});

const store = createStore(
    rootReducer, composeWithDevTools(
        applyMiddleware(ReduxThunk)
    )
);

const elem = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(elem, document.querySelector('main'));