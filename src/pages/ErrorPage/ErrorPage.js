import React from 'react'
import './ErrorPage.styles.scss';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <ErrorMessage />
    </div>
  )
}

export default ErrorPage;