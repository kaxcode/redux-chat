import React, { Component } from "react";
import MessageInput from "./components/MessageInput";
import MessageView from "./components/MessageView";

class App extends Component {
  render() {
    return (
      <div className="ui segment">
        <MessageView />
        <MessageInput />
      </div>
    );
  }
}

export default App;
