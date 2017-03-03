import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './containers/AppContainer'
import configureStore from './store/configureStore'
import {Router, Route, hashHistory} from 'react-router';

injectTapEventPlugin();
const store = configureStore();

render(
    <Provider store={store}>
            <App/>
    </Provider>,
    document.getElementById('app')
);