import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import '../stylesGlobal.scss'
import './styles.scss'

// Components
import { AppRouter1 } from './router/AppRouter'

ReactDOM.render(<AppRouter1 />, document.getElementById('app'))
