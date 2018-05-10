import React from "react";
import { AppContext } from "../contexts/AppContext";

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
      <div className="ui input">
        <input onChange={this.onChange} value={this.state.value} type="text" />
        <AppContext.Consumer>
          {({ addMessage }) => (
            <button
              onClick={() => addMessage(this.state.value)}
              className="ui primary button"
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
