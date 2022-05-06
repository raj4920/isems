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
import SphAddGameDetails from "./Components/SphAddGameDetails";
import SphSetSportSchedule from "./Components/SphSetSportSchedule";
import SphAllocateSportsCoordinator from "./Components/SphAllocateSportsCoordinator";
import SphGenerateResult from "./Components/SphGenerateResult";
import SphGenerateReport from "./Components/SphGenerateReport";
import ScParticipantDetails from "./Components/ScParticipantDetails";
import ScAddScore from "./Components/ScAddScore";
import DAddFaculty from "./Components/DAddFaculty";
import ChangePassword from "./Components/ChangePassword";
import ForgetPassword1 from "./Components/ForgetPassword1";
import ForgetPassword2 from "./Components/ForgetPassword2";

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
          window.location.pathname === "/changepassword" ||
          window.location.pathname === "/sportsheaddashboard" ||
          window.location.pathname === "/sportsheaddashboard/agd" ||
          window.location.pathname === "/sportsheaddashboard/sss" ||
          window.location.pathname === "/sportcoordinatordashboard" ||
          window.location.pathname === "/directordashboard" ||
          window.location.pathname === "/directordashboard/vfd" ||
          window.location.pathname === "/directordashboard/gr" ||
          window.location.pathname === "/directordashboard/vss" ||
          window.location.pathname === "/sportsheaddashboard/asc" ||
          window.location.pathname === "/sportsheaddashboard/gres" ||
          window.location.pathname === "/sportsheaddashboard/grp" ||
          window.location.pathname === "/sportcoordinatordashboard/pd" ||
          window.location.pathname === "/sportcoordinatordashboard/as" ||
          window.location.pathname === "/directordashboard/af" ? null : (
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
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/forgetpassword1" element={<ForgetPassword1 />} />
            <Route path="/forgetpassword2" element={<ForgetPassword2 />} />

            {/* Student Dashboard Routes */}
            <Route path="/studentdashboard" element={<StudentDashBoard />} />
            <Route path="/studentdashboard/gd" element={<StGameDetails />} />
            <Route
              path="/studentdashboard/gp"
              element={<StGameParticipation />}
            />
            <Route path="/studentdashboard/grs" element={<StGameResult />} />
            <Route
              path="/studentdashboard/gc"
              element={<StGameCoordinator />}
            />
            <Route path="/studentdashboard/gs" element={<GameSchedule />} />
            <Route path="/studentdashboard/gr" element={<StGameRules />} />

            {/* Sports Head Dashboard Routes */}
            <Route
              path="/sportsheaddashboard"
              element={<SporstHeadDashboard />}
            />
            <Route
              path="/sportsheaddashboard/agd"
              element={<SphAddGameDetails />}
            />
            <Route
              path="/sportsheaddashboard/sss"
              element={<SphSetSportSchedule />}
            />
            <Route
              path="/sportsheaddashboard/asc"
              element={<SphAllocateSportsCoordinator />}
            />
            <Route
              path="/sportsheaddashboard/gres"
              element={<SphGenerateResult />}
            />
            <Route
              path="/sportsheaddashboard/grp"
              element={<SphGenerateReport />}
            />

            {/* Sport Coordinator Routes */}
            <Route
              path="/sportcoordinatordashboard"
              element={<SportCoordinatorDashboard />}
            />
            <Route
              path="/sportcoordinatordashboard/pd"
              element={<ScParticipantDetails />}
            />
            <Route
              path="/sportcoordinatordashboard/as"
              element={<ScAddScore />}
            />

            {/* Director Dashboard Routes*/}
            <Route path="/directordashboard" element={<DirectorDashBoard />} />
            <Route
              path="/directordashboard/vfd"
              element={<DFacultyDetails />}
            />
            <Route
              path="/directordashboard/af"
              element={<DAddFaculty />}
            ></Route>
            <Route path="/directordashboard/gr" element={<DGameReport />} />
            <Route path="/directordashboard/vss" element={<DGameSchedule />} />
            <Route path="/" element={<ImageSlider slides={SliderData} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
