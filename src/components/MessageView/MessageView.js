import React from "react";
import { AppContext } from "../../contexts/AppContext";
import "./MessageView.css";

class MessageView extends React.Component {
  render() {
    const messages = (
      <AppContext.Consumer>
        {({ messages, deleteMessage }) =>
          messages.map((message, index) => (
            <div
              className="MessageView__Comment"
              key={index}
              onClick={() => deleteMessage(index)}
            >
              {message}
            </div>
          ))
        }
      </AppContext.Consumer>
    );

    return (
      <main className="MessageView__ListContainer">
        <div className="MessageView__MessagesList">{messages}</div>
      </main>
    );
  }
}

export default MessageView;