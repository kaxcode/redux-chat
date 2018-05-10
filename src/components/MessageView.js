import React from "react";
import { AppContext } from "../contexts/AppContext";

class MessageView extends React.Component {
  render() {
    const messages = (
      <AppContext.Consumer>
        {({ messages, deleteMessage }) =>
          messages.map((message, index) => (
            <div
              className="comment"
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
      <div>
        <div>{messages}</div>
      </div>
    );
  }
}

export default MessageView;
