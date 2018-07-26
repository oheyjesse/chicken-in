import React from 'react'
import PageNotFoundImage from '../img/404.svg'
import './PageNotFound.scss'

const PageNotFound = () => {
  return (
    <div className='PageNotFound'>
      <div className='PageNotFound__container'>
        <p>404 Page Not Found</p>
        <img src={PageNotFoundImage} alt='Page Not Found'/>
      </div>
    </div>
  )
}

export { PageNotFound }
