import React from 'react';
import { ChildComponentOne } from '../ChildComponentOne/ChildComponentOne'
import { ChildComponentTwo } from '../ChildComponentTwo/ChildComponentTwo'
import webpack from '../../../img/webpack.png'

const SplashPage = () => (
  <div>
    <h2>Splash Page Component</h2>
    <img src={webpack} alt="webpack" width="300"/>
    <ChildComponentOne />
    <ChildComponentTwo />
    <p>End of Splash Page</p>
  </div>
)

export { SplashPage }