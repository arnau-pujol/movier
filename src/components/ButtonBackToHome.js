import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonBackToHome = () => (
  <Link
    className='button button-back is-info' to='/'>
    Back to home
  </Link>
)