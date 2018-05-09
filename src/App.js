import React, { Component } from "react";
import MessageInput from "./components/MessageInput";
import MessageView from "./components/MessageView";

class App extends Component {
  componentDidMount() {
    this.props.messages.subscribe(() => this.forceUpdate());
  }

  render() {
    const messages = this.props.messages;

    return (
      <div className="ui segment">
        <MessageView messages={messages} />
        <MessageInput />
      </div>
    );
  }
}

export default App;
