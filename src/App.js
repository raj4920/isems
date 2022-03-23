import "./App.css";
import Navbar from "./Components/Navbar";
import ImageSlider from "./Components/ImageSlider";
import { SliderData } from "./Components/SliderData";

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

      <ImageSlider slides={SliderData} />
    </>
  );
}

export default App;
