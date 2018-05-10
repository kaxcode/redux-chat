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
      <div className="ui center aligned basic segment">
        <div className="ui comments">{messages}</div>
      </div>
    );
  }
}

export default MessageView;
