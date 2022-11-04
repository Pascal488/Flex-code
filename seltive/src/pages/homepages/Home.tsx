import React from 'react'
import AuthProvider from '../../providers/AuthProvider'

const Home = () => {
  return (
    <AuthProvider>
      <div className='p-5'>
        <h1>Hello</h1>
      </div>
    </AuthProvider>
  )
}

export default Home