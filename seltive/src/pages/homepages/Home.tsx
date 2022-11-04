import React from 'react'
import AuthProvider from '../../providers/AuthProvider'
import Welcome from './Welcome'

const Home = () => {
  return (
    <AuthProvider>
      
            <Welcome/>
      
    </AuthProvider>
  )
}

export default Home