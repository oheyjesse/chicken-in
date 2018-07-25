import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GuestNavigation } from '../guestNavigation/GuestNavigation/GuestNavigation'
import { SplashPage } from '../splashPage/SplashPage/SplashPage'
import { ContactPage } from '../contactPage/ContactPage/ContactPage'
import { AboutPage } from '../aboutPage/AboutPage/AboutPage'
import { Footer } from '../footer/Footer/Footer'
import './AppRouter.scss'

const AppRouter = () => (
  <BrowserRouter>

    <div className="AppRouter GuestAppRouter">

      <GuestNavigation />

      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route path="/about" component={AboutPage}/>
        <Route path="/contact" component={ContactPage}/>
      </Switch>

      <Footer />

    </div>

  </BrowserRouter>
)

export { AppRouter }
