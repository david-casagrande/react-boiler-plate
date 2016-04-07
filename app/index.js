import App from './components/app';
import React from 'react';
import ReactDOM from 'react-dom';

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(React.createElement(App), app);
