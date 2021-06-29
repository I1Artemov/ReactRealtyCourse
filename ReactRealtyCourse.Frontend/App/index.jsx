import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './Containers/app.jsx';
import houseReadReducer from './Containers/HouseRead/houseReadReducer.jsx';
import houseIndexReducer from './Containers/HouseIndex/houseIndexReducer.jsx';

const rootReducer = combineReducers({
    houseReadReducer,
    houseIndexReducer
});

function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}

const store = configureStore();

render
(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
);