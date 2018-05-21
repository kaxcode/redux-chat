import React from "react";
import MessageInput from "./components/MessageInput";
import MessageView from "./components/MessageView/MessageView";

class App extends React.Component {
  render() {
    return (
      <div>
        <MessageView />
        <MessageInput />
      </div>
    );
  }
}

export default App;
