import React from 'react'
import './Button.scss'

// Destructuring 'props.handleClick', 'props.children' and 'props.value'
const Button = ({handleClick, customClass, children, value}) => (
  <button className={'button ' + customClass} onClick={handleClick} value={value}>
    {children}
  </button>
)

export { Button }
