import React, { Component } from "react";
import MessageInput from "./components/MessageInput";
import MessageView from "./components/MessageView";

class App extends Component {
  render() {
    const messages = this.props.messages;

    return (
      <div className="ui segment">
        <MessageView
          messages={this.props.messages}
          deleteMessage={this.props.deleteMessage}
        />
        <MessageInput addMessage={this.props.addMessage} />
      </div>
    );
  }
}

export default App;
