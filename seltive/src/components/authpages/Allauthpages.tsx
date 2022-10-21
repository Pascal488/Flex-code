import React from 'react'
import Signin from './Signin';
import Signup from './Signup';


import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Confirm from './Confirm';
import Pickusername from './Pickusername';
import Forgotpasword from './Forgotpasword';
import Checkemail from './Checkemail';
import Setnewpasword from './Setnewpasword';
import ResetSuccesspage from './ResetSuccesspage';



const Allauthpages = () => {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route path='/'>
                <Route index element={<Signin/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/confirm' element={<Confirm/>}/>
                <Route path='/pickusername' element={<Pickusername/>}/>
                <Route path='/forgotpassword' element={<Forgotpasword/>}/>
                <Route path='/checkemail' element={<Checkemail/>}/>
                <Route path='/setnewpassword' element={<Setnewpasword/>}/>
                <Route path='/ressetsuccespage' element={<ResetSuccesspage/>}/>
            </Route>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default Allauthpages