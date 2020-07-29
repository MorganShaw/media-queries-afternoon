import React, {Component} from 'react';
import './App.css';

// class App extends Component() {
  // constructor() {
  //   super()
  //   this.state = {

  //   }
  // }
function App() {
  // render (){
    return (
      <div className="App">
        <div className="welcome-page">
          <header>
            <div className="nav-container">
              <a class="navbar-brand" href="#page-top">
                <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"/>
              </a>
              <div className="desktop-menu">
                <p className="menu-link">SERVICES</p>
                <p className="menu-link">PORTFOLIO</p>
                <p className="menu-link">ABOUT</p>
                <p className="menu-link">TEAM</p>
                <p className="menu-link">CONTACT</p>
              </div>
              <div>
                <img className="hamburger" src="./download.png"/>
              </div>
            </div>
          </header>
          <div className="welcome-container">
            <h2 className="welcome-1">Welcome To Our Studio!</h2>
            <h2 className="welcome-2">IT'S NICE TO MEET YOU</h2>
            <button className="more-btn" href="#services">TELL ME MORE</button>
          </div>
        </div>
      </div>
    );

  // }
}

export default App;
