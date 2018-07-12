import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles.scss';
import 'react-dates/initialize';
import { AppRouter } from './router/AppRouter'


ReactDOM.render(<AppRouter />, document.getElementById('app'))