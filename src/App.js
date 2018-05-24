import React from "react";
import MessageInput from "./components/MessageInput/MessageInput";
import MessageView from "./components/MessageView/MessageView";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App__Container">
        <MessageView />
        <MessageInput />
      </div>
    );
  }
}

export default App;
