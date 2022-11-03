import React from 'react'
import AuthProvider from '../../providers/AuthProvider'

const Home = () => {
  return (
    <AuthProvider>
      Home
    </AuthProvider>
  )
}

export default Home