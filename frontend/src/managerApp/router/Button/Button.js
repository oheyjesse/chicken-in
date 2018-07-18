import React from 'react'
import './Button.scss'

// Destructuring 'props.handleClick', 'props.children' and 'props.value'
const Button = ({handleClick, className, children, value}) => (
  <button className={'button ' + className} onClick={handleClick} value={value}>
    {children}
  </button>
)

export { Button }
