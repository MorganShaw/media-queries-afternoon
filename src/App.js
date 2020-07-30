import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      dropDownVisible: false
    }
  }

  toggleDropDown = () => {
    this.setState({
      dropDownVisible: !this.state.dropDownVisible
    })
  }

  render (){
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
              <button className="menu-btn" onClick={this.toggleDropDown}>MENU &#9776;
              </button>
            </div>
          </header>
          {this.state.dropDownVisible ? (
            <div className="dropdown">
              <div className="dropdown-box">
                <p className="drop-link">SERVICES</p>
                <p className="drop-link">PORTFOLIO</p>
                <p className="drop-link">ABOUT</p>
                <p className="drop-link">TEAM</p>
                <p className="drop-link">CONTACT</p>
              </div>
            </div>
          ) : null}
          <div className="welcome-container">
            <h2 className="welcome-1">Welcome To Our Studio!</h2>
            <h2 className="welcome-2">IT'S NICE TO MEET YOU</h2>
            <button className="more-btn" href="#services">TELL ME MORE</button>
          </div>
        </div>
      </div>
    );

  }
}

export default App;
