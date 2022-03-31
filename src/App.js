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
import DirectorDashBoard from "./Components/DirectorDashBoard";
import GameSchedule from "./Components/GameSchedule";
import DFacultyDetails from "./Components/DFacultyDetails";
import DGameReport from "./Components/DGameReport";
import DGameSchedule from "./Components/DGameSchedule";

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
          window.location.pathname === "/studentdashboard/gs" ||
          window.location.pathname === "/sportsheaddashboard" ||
          window.location.pathname === "/sportcoordinatordashboard" ||
          window.location.pathname === "/directordashboard" ||
          window.location.pathname === "/directordashboard/vfd" ||
          window.location.pathname === "/directordashboard/gr" ||
          window.location.pathname === "/directordashboard/vss" ? null : (
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
              path="/studentdashboard/gs"
              element={<GameSchedule />}
            ></Route>
            <Route
              path="/studentdashboard/gr"
              element={<StGameRules />}
            ></Route>

            {/* Sports Head Dashboard Routes */}
            <Route
              path="/sportsheaddashboard"
              element={<SporstHeadDashboard />}
            ></Route>

            {/* Sport Coordinator Routes */}
            <Route
              path="/sportcoordinatordashboard"
              element={<SportCoordinatorDashboard />}
            ></Route>

            {/* Director Dashboard Routes*/}
            <Route
              path="/directordashboard"
              element={<DirectorDashBoard />}
            ></Route>
            <Route
              path="/directordashboard/vfd"
              element={<DFacultyDetails />}
            ></Route>
            <Route
              path="/directordashboard/gr"
              element={<DGameReport />}
            ></Route>
            <Route
              path="/directordashboard/vss"
              element={<DGameSchedule />}
            ></Route>
            <Route path="/" element={<ImageSlider slides={SliderData} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
