import React from 'react'
import './Button.scss'

// Destructuring 'props.handleClick', 'props.children' and 'props.value'
const Button = ({handleClick, children, value}) => (
  <button className="button" onClick={handleClick} value={value}>
    {children}
  </button>
)

export { Button }
