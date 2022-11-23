import { useLayoutEffect  } from "react";
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
import Welcome from "./pages/homepages/Welcome";
import Overview from "./pages/homepages/overview/Overview";
import Marketing from "./pages/homepages/marketing/Marketing";
import Promotion from "./pages/homepages/promotion/Promotion";
import Orders from "./pages/homepages/orders/Orders";
import Product from "./pages/homepages/products/Product";
import HomeExplore from "./pages/homeexplore/HomeExplore";



function App() {
  useLayoutEffect(() => {
    const loader = document.getElementById("loader")!;
    setTimeout(() => {
      loader.classList.add("loaded");
      setTimeout(() => {
        document.body.removeChild(loader);
      }, 300);
    }, 2000);
  }, []);
 
  return (
    <div className="font-barlow  bg-indigo-50 dark:bg-slate-800"  style={{ animationDelay: "0.1s" }}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home/>} />
                <Route path="/welcome" element={<Welcome/>}/>
                <Route path="/overview" element={<Overview/>}/>
                <Route path="/marketing" element={<Marketing/>}/>
                <Route path="/promotion" element={<Promotion/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/product" element={<Product/>}/>
            </Route>

            <Route path="/home"element={<HomeExplore  />} />
            <Route path="/login"element={<Signin  />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/pickusername" element={<Pickusername />} />
            <Route path="/forgotpassword" element={<Forgotpasword />} />
            <Route path="/checkemail" element={<Checkemail />} />
            <Route path="/setnewpassword" element={<Setnewpasword />} />
            <Route path="/ressetsuccespage" element={<ResetSuccesspage />} />
            <Route path="/home"element={<HomeExplore  />} />

         
        </Routes>
      </BrowserRouter>
                 
          
          
          
    </div>
  );
}

export default App;
