import { Sign } from "crypto";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";

import Signin from "./pages/authpages/Signin";
import Signup from "./pages/authpages/Signup";
import Confirm from "./pages/authpages/Confirm";
import Pickusername from "./pages/authpages/Pickusername";
import Forgotpasword from "./pages/authpages/Forgotpasword";
import Checkemail from "./pages/authpages/Checkemail";
import Setnewpasword from "./pages/authpages/Setnewpasword";
import ResetSuccesspage from "./pages/authpages/ResetSuccesspage";
import Home from "./pages/homepages/Home";



function App() {
  return (
    <div className="font-barlow  bg-gray-50">
      
          
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home/>} />
            </Route>
            <Route path="/login"element={<Signin  />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/pickusername" element={<Pickusername />} />
            <Route path="/forgotpassword" element={<Forgotpasword />} />
            <Route path="/checkemail" element={<Checkemail />} />
            <Route path="/setnewpassword" element={<Setnewpasword />} />
            <Route path="/ressetsuccespage" element={<ResetSuccesspage />} />
         
        </Routes>
      </BrowserRouter>
                 
          
          
          
    </div>
  );
}

export default App;
