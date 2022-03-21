import './App.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <h3 className="text-light">Institute Sport Event Management</h3>
          {/* <a className="navbar-brand " href="/">Institute Sport Event Management</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Sign In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" tabindex="-1" aria-disabled="true">Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" tabindex="-1" aria-disabled="true">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" tabindex="-1" aria-disabled="true">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-dark">
        <div className="navbar-brand mx-auto">
          <h6 className="text-light">@2021-22 | Bhumik Patel & Raj Zalavadiya</h6>
        </div>
      </nav>
    </>
    // <div className=="App">
    //   <header className=="App-header">
    //     <img src={logo} className=="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className=="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >    
    //       Hello Raj
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;