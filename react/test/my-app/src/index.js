import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import state from './redux/state.js'

// let posts = [
// 	{ id: 1, message: 'Hi? How are you?', likesCount: 10 },
// 	{ id: 2, message: 'It\'s my first post', likesCount: 15 },
// 	{ id: 3, message: 'BLABLABLA', likesCount: 15 },
// 	{ id: 3, message: 'LALALA', likesCount: 15 }
// ]
// let dialogs = [
// 	{ id: 1, name: 'Dimych' },
// 	{ id: 2, name: 'Fimych' },
// 	{ id: 3, name: 'Gimych' },
// 	{ id: 4, name: 'Bimych' },
// 	{ id: 5, name: 'Nimych' },
// 	{ id: 6, name: 'Limych' }
// ]
// let messagesData = [
// 	{ id: 1, message: 'Hi!', },
// 	{ id: 2, message: 'How are you?', },
// 	{ id: 3, message: 'Yo', },
// ]
ReactDOM.render(
	<React.StrictMode>
		<App state={state} />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
