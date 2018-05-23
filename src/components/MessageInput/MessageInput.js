import React from "react";
import { AppContext } from "../../contexts/AppContext";
import "./MessageInput.css";

class MessageInput extends React.Component {
  state = {
    value: ""
  };

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div className="MessageInput__Container">
        <input
          className="MessageInput"
          onChange={this.onChange}
          value={this.state.value}
          type="text"
        />
        <AppContext.Consumer>
          {({ addMessage }) => (
            <button
              classname="MessageInput__Btn"
              onClick={() => addMessage(this.state.value)}
              type="submit"
            >
              Submit
            </button>
          )}
        </AppContext.Consumer>
      </div>
    );
  }
}

export default MessageInput;
