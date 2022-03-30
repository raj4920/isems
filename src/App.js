import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import ImageSlider from "./Components/ImageSlider";
import About from "./Components/About";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import ContactUs from "./Components/ContactUs";
import { SliderData } from "./Components/SliderData";
import StGameDetails from "./Components/StGameDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentDashBoard from "./Components/StudentDashBoard";
import SporstHeadDashboard from "./Components/SportsHeadDashBoard";
import StGameParticipation from "./Components/StGameParticipation";
import SportCoordinatorDashboard from "./Components/SportCoordinatorDashboard";
import StGameResult from "./Components/StGameResult";
import StGameCoordinator from "./Components/StGameCoordinator";
import StGameRules from "./Components/StGameRules";

function App() {
  return (
    <>
      <Router>
        <React.Fragment>
          {window.location.pathname === "/studentdashboard" ||
          window.location.pathname === "/studentdashboard/gd" ||
          window.location.pathname === "/studentdashboard/gp" ||
          window.location.pathname === "/studentdashboard/grs" ||
          window.location.pathname === "/studentdashboard/gc" ||
          window.location.pathname === "/studentdashboard/gr" ||
          window.location.pathname === "/sportsheaddashboard" ? null : (
            <Navbar
              title="Institute Sport Event Management"
              home="Home"
              signin="Sign In"
              signup="Sign Up"
              contactus="Contact Us"
              aboutus="About Us"
            />
          )}
        </React.Fragment>

        <div className="App">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contactus" element={<ContactUs />} />

            {/* Student Dashboard Routes */}
            <Route
              path="/studentdashboard"
              element={<StudentDashBoard />}
            ></Route>
            <Route
              path="/studentdashboard/gd"
              element={<StGameDetails />}
            ></Route>
            <Route
              path="/studentdashboard/gp"
              element={<StGameParticipation />}
            ></Route>
            <Route
              path="/studentdashboard/grs"
              element={<StGameResult />}
            ></Route>
            <Route
              path="/studentdashboard/gc"
              element={<StGameCoordinator />}
            ></Route>
            <Route
              path="/studentdashboard/gr"
              element={<StGameRules />}
            ></Route>

            <Route
              path="/sportsheaddashboard"
              element={<SporstHeadDashboard />}
            ></Route>
            <Route
              path="/sportcoordinatordashboard"
              element={<SportCoordinatorDashboard />}
            ></Route>
            <Route path="/" element={<ImageSlider slides={SliderData} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
