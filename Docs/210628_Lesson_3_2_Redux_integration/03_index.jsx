import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './Containers/app.jsx';
import houseReadReducer from './Containers/HouseRead/houseReadReducer.jsx';

function configureStore(initialState) {
    return createStore(houseReadReducer, initialState);
}

const store = configureStore();

render
(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
);