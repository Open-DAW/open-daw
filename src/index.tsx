import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import '@material/react-material-icon/dist/material-icon.css';
import './index.scss';
import "react-resizable/css/styles.css";
import 'rc-slider/assets/index.css';

import { AppNav } from './components/App/Navigator';

ReactDOM.render(<AppNav  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
