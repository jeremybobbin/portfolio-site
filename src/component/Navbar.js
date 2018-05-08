import React from 'react';
import {NavLink} from 'react-router-dom';
import Svg, {Github, Twitter, Linkedin} from './Svg';
import Hamburger from './Hamburger';

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        navbarOpen: false
    }
  }


  getVisibility () {
    return this.state.navbarOpen ?
    "showing" :
    "hiding";
  }

  toggleNavbar = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen
    });
  }

  render () {
    return (
      <nav>
        <div className="navbar-container">
          <div className="svg-container">
            <Svg
              svg={Github}
              link={"https://github.com/jeremybobbin"}/>
            <Svg
              svg={Linkedin}
              link={"https://www.linkedin.com/in/jeremy-bobbin-a5b4a1158/"}/>
            <Svg
              svg ={Twitter}
              link={"https://twitter.com/JeremyBobbin"}/>
          </div>
          <Hamburger
            visibility={() => this.getVisibility()}
            toggle={() => this.toggleNavbar()}
            layers={3}/>
        </div>


        <div className={`${this.getVisibility()} nav-link-container`}>
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink exact to="/playground">Playground</NavLink></li>
            <li><NavLink exact to="/contact">Contact Me</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}
