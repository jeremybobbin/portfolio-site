import React from 'react';
import {Router, Redirect} from 'react-router';
import ErrorMessage from './ErrorMessage';
import createHistory from "history/createBrowserHistory";

const holdTime = 2500;
let timeouts = [];

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonText: "SEND",
      nameError: "",
      emailError: "",
      bodyError: "",
      redirect: false,
      message: {
        name: "",
        email: "",
        body: "",
      },
    };
  }

  setStateProp(prop, value) {
    console.log(`Prop: ${prop}          Value: ${value}`)
    this.setState({
      ...this.state,
      [prop]: [value]
    });
  }

  getState(prop) {
    let value =  this.state[prop];
    if(typeof value === "object" && value.length === 1) {
      return value[0];
    }
    return value;
  }

  timeChecker(timerProp, timeExpected, successFunc) {
    let timeout = setTimeout(() => {
      let timeSince = Date.now() - this.getState(timerProp);
      if(timeSince >= timeExpected && timeSince <= timeExpected + 5) {
        return successFunc();
      }
    }, timeExpected);
    timeouts.push(timeout);
  }

  clearTimeouts() {
    timeouts.forEach(timeoutUnit => clearTimeout(timeoutUnit));
  }

  updateMessage(e) {
    this.setState({
      ...this.state,
      message: {
        ...this.state.message,
        [e.target.id]: e.target.value,
      }
    });
    console.log(this.state);
  }

  updateButtonText(text, time) {
    let success = () => this.setStateProp("buttonText", text);
    this.timeChecker("timeOnClick", time, success);
  }

  inputExists(input) {
    if(input) {
      return input.length > 0;
    }
  }

  validateName() {
    if (!this.inputExists(this.state.message.name)) {
      return "Name is required.";
    }
    if (this.state.message.name.length >= 5) {
      return "";
    }
    return "Name must be at least 5 characters.";
  }

  validateEmail() {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!this.inputExists(this.state.message.email)) {
      return "Email is required.";
    }
    if(emailRegex.test(this.state.message.email)) {
      return "";
    }
    return "Email is invalid";
  }

  validateBody() {
    if (!this.inputExists(this.state.message.body)) {
      return "bodyError", "Body is required.";
    }
    if (this.state.message.body.length > 25) {
      return "";
    }
    return "Message must be at least 25 characters";
  }

  validateMessage() {
    let nameError = this.validateName(),
        emailError = this.validateEmail(),
        bodyError = this.validateBody();
        console.log("This is the name error: " + nameError);
    this.setState({
      ...this.state,
      nameError,
      emailError,
      bodyError,
    });
    return nameError === "" && emailError === "" && bodyError === "";
  }

  submitClick() {
    if(this.validateMessage()) {
      this.setStateProp("timeOnClick", Date.now())
      let success = () => {
        const history = createHistory({
          forceRefresh: true
        });
        console.log(history);
        history.push('/', {notification: "Message Sent"});
      }
      this.timeChecker("timeOnClick", holdTime, success);
      this.updateButtonText("HOLD", 0);
      this.updateButtonText("HOLD.", holdTime/4);
      this.updateButtonText("HOLD..", holdTime/2);
      this.updateButtonText("HOLD...", holdTime*.75);
    } else {
      console.log(this.state);
    }
  }

  mouseUp() {
    this.clearTimeouts();
    this.setStateProp("timeOnClick", 0);
    this.setStateProp("buttonText", "SEND");
  }

  render() {
    return (
      <main className="contact">
        <button className="submit-button button"
                onMouseDown={() => this.submitClick()}
                onMouseUp={() => this.mouseUp()}
                ><span className="button-text">{this.state.buttonText}</span></button>

        <div className="name-input">
          <span>
            <label htmlFor="name">Name</label>
            {this.state.nameError.length ? <ErrorMessage message={this.state.nameError}/> : null}<br/>
          </span>
          <input
            className={this.state.nameError ? "invalid" : "valid"}
            onChange={(e) => this.updateMessage(e)}
            name="name"
            type="text"
            id="name"
            value={this.state.message.name}></input>
        </div>

        <div className="email-input">
          <label htmlFor="email">Email</label>
          {this.state.emailError.length ? <ErrorMessage message={this.state.emailError}/> : null}<br/>
          <input
            className={this.state.emailError ? "invalid" : "valid"}
            onChange={(e) => this.updateMessage(e)}
            name="email"
            type="text"
            id="email"
            value={this.state.message.email}></input>
        </div>

        <div className="body-input">
          <label htmlFor="body">Message</label>
          {this.state.bodyError.length ? <ErrorMessage message={this.state.bodyError}/> : null}<br/>
          <textarea
            className={this.state.bodyError ? "invalid" : "valid"}
            onChange={(e) => this.updateMessage(e)}
            name="body"
            id="body"
            value={this.state.message.message}></textarea>
        </div>
            </main>
    );
  }
}
