import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar
        title="Institute Sport Event Management"
        home="Home"
        signin="Sign In"
        signup="Sign Up"
        contactus="Contact Us"
        aboutus="About Us"
      />
      {/* <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
