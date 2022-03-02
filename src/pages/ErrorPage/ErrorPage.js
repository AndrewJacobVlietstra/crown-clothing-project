import React from 'react'
import './ErrorPage.styles.scss'

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1 className='error-title'>404 ERROR</h1>
      <h2 className='error-message'>Oops! Page not found!</h2>
      <p className='error-sub-message'>Sorry the page you're looking for doesn't exist!</p>
      <button className='back-button' onClick={() => window.history.back()}>Go Back</button>
    </div>
  )
}

export default ErrorPage