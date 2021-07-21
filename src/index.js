import React from 'react';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom';
import Root from './routes';

import registerServiceWorker from './registerServiceWorker';
render(<Root />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
registerServiceWorker();
reportWebVitals();
