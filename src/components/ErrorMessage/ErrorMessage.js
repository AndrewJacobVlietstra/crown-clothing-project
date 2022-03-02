import React from 'react';
import './ErrorMessage.styles.scss';

const ErrorMessage = () => {
  return (
    <div className='error-message-container'>
      <h1 className='error-title'>404 ERROR</h1>
      <h2 className='error-message'>Oops! Page not found!</h2>
      <p className='error-sub-message'>Sorry the page you're looking for doesn't exist!</p>
      <div className='buttons-container'>
        <a className='back-button' onClick={() => window.history.back()}>Go Back</a>
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' className='back-button'>Report Error</a>
      </div>
    </div>
  )
}

export default ErrorMessage;