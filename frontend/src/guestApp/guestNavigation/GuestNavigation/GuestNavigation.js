import React from 'react'
import { Link } from 'react-router-dom'
import './GuestNavigation.scss'

const GuestNavigation = () => {
  return (
    <div className="GuestNavigation">
      <p><Link to="/">Splash Page</Link></p>
      <p><Link to="/about">About Page</Link></p>
      <p><Link to="/contact">Contact Page</Link></p>
    </div>
  )
}

export { GuestNavigation }
