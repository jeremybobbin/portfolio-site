import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    if(typeof this.props.location.state === "undefined") {
      console.log("This.props.state is undefined.");
      this.state = {
        notification: ""
      };
    } else {
      this.state = {
        notification: this.props.location.state.notification
      };
    }
  }
  render() {
    return(
      <main className="home">
        <div className={`notification ${this.state.notification.length > 0 ? "show" : ""}`}>
          <p>{this.state.notification}</p>
        </div>
        <div className="main-text">
          <h1>Hey, I'm <span className="name">Jeremy</span></h1>
          <div className="sub-title">
            <p className="first-p">I'm a </p>
            <p className="taunt">fullstack</p>
            <p>developer.</p>
          </div>
        </div>
        <NavLink to="/portfolio"><button className="button">MY PORTFOLIO</button></NavLink>
      </main>
    );
  }
}
