import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import WeatherComponent from './component/WeatherComponent';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
        <WeatherComponent />
    </Provider>,
    document.getElementById('root')
);