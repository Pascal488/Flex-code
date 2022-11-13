import React from 'react'
import AuthProvider from '../../providers/AuthProvider'
import Overview from './overview/Overview'
import Welcome from './Welcome'

const Home = () => {
const user:boolean = true;
  
  return (
    <div>
    <AuthProvider>
    {user ?
    <Welcome/>:
    <Overview/>
    }
    </AuthProvider>
    </div>

  )
}

export default Home