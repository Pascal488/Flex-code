import React from 'react'
import AuthProvider from '../../providers/AuthProvider'
import Overview from './overview/Overview'
import Welcome from './Welcome'

const Home = () => {
  return (
    <div >
    <AuthProvider >
      <Overview/> 
    </AuthProvider>
    </div>

  )
}

export default Home