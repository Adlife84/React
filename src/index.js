import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'You bro', likes: 10},
    {id: 2, message: 'Hi! Hi are you?', likes: 15},
    {id: 3, message: 'Awesome! Are you?', likes: 8},
    {id: 4, message: 'Is anybody here?', likes: 25}
]

let dialogs = [
    {id: 1, name: 'Andrei'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Dima'},
    {id: 4, name: 'Elena'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'Olga'}
]

let messages = [
    {id: 1, message: 'Hi how are you?'},
    {id: 2, message: 'How is going?'},
    {id: 3, message: 'Anydoby here?'},
    {id: 4, message: 'Goodbay forever!'}
]

ReactDOM.render(<React.StrictMode><App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
