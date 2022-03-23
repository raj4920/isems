import "./App.css";
import Navbar from "./Components/Navbar";
import ImageSlider from "./Components/ImageSlider";
import About from "./Components/About";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import ContactUs from "./Components/ContactUs";
import { SliderData } from "./Components/SliderData";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar
            title="Institute Sport Event Management"
            home="Home"
            signin="Sign In"
            signup="Sign Up"
            contactus="Contact Us"
            aboutus="About Us"
          />

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/" element={<ImageSlider slides={SliderData} />} />
          </Routes>
          {/* <ImageSlider slides={SliderData} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
