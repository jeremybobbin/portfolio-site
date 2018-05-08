import React from 'react';

export default class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
  }

  toggleVisibility() {
    this.setState({
      visibility: !this.state.visibility
    });
  }
  render() {
    return (
      <div className="error-message">
        <p>
          {this.props.message}
        </p>
      </div>
    );
  }
}
