import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GuestNavigation } from '../guestNavigation/GuestNavigation/GuestNavigation'
import { SplashPage } from '../splashPage/SplashPage/SplashPage'
import { ContactPage } from '../contactPage/ContactPage/ContactPage'
import { AboutPage } from '../aboutPage/AboutPage/AboutPage'

const AppRouter = () => (

  <BrowserRouter>
    <div className="AppRouter">

      <GuestNavigation />
      
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route path="/about" component={AboutPage}/>
        <Route path="/contact" component={ContactPage}/>
      </Switch>

    </div>
  </BrowserRouter>
)

export { AppRouter }


