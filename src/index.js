import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


import store from './redux/store';

let rerenderEntireTree = (state) => {
    debugger;
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}


rerenderEntireTree(store.getState());



store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});





serviceWorker.unregister();