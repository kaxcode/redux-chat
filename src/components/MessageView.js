import React from "react";

class MessageView extends React.Component {
  render() {
    const messages = this.props.messages.map((message, index) => (
      <div
        className="comment"
        key={index}
        onClick={() => this.props.deleteMessage(index)}
      >
        {message}
      </div>
    ));
    console.log(messages);
    return (
      <div className="ui center aligned basic segment">
        <div className="ui comments">{messages}</div>
      </div>
    );
  }
}

export default MessageView;
