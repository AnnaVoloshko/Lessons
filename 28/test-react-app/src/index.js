import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const listOfCards = [
    {
        title: 'Title1',
        body: 'Content1',
        footer: 'Footer1'
    }, {
        title: 'Title2',
        body: 'Content2',
        footer: 'Footer2'
    }, {
        title: 'Title3',
        body: 'Content3',
        footer: 'Footer3'
    }
]

ReactDOM.render(<App cards={listOfCards} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
