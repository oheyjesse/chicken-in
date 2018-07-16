import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { SplashPage } from '../splashPage/SplashPage/SplashPage'
import { ContactPage } from '../contactPage/ContactPage/ContactPage'
import { AboutPage } from '../aboutPage/AboutPage/AboutPage'

const AppRouter = () => (

  <BrowserRouter>
    <div>

      <h1>Guest</h1>
      <p><Link to="/">Splash Page</Link></p>
      <p><Link to="/about">About Page</Link></p>
      <p><Link to="/contact">Contact Page</Link></p>
      <hr/>

      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route path="/about" component={AboutPage}/>
        <Route path="/contact" component={ContactPage}/>
      </Switch>

    </div>
  </BrowserRouter>
)

export { AppRouter }


