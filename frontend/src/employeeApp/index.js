import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import '../stylesGlobal.scss'
import './styles.scss'

// Components
import { AppRouter } from './router/AppRouter'
import 'react-dates/initialize'

ReactDOM.render(<AppRouter />, document.getElementById('app'))
