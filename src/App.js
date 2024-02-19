import Home from "./pages/home/Home";
import Navitem from "./components/navbars/Navitem";
import Footer from "./components/footer/Footer";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import Coursesopenpage from "./pages/CoursesOpenPage/Coursesopenpage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutuspage from "./pages/AboutUsPage/Aboutuspage";
import Pricing from "./pages/pricingsection/Pricing";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Contact from "./pages/contact/Contact";
import { useEffect } from "react";
import axios from 'axios';



function App() {
      
  useEffect(() => {
    axios.get('./data.json')
        .then((data) => console.log(data))
        .catch((err) => alert(err))
}, [])
  return (
    <div className='bg-white-97 px-[15px]'>

      <BrowserRouter>
        <Navitem />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/coursesopenpage" element={<Coursesopenpage />} />
          <Route path="/aboutuspage" element={<Aboutuspage />} />
          <Route path="/pricingSection" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
