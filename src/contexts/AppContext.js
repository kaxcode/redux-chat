import React from "react";

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  state = {
    messages: []
  };

  addMessage = message => {
    this.setState({
      messages: this.state.messages.concat(message)
    });
  };

  deleteMssage = index => {
    return {
      messages: [
        ...this.state.messages.slice(0, index),
        ...this.state.messages.slice(index + 1, this.state.messages.length)
      ]
    };
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addMessage: this.addMessage,
          deleteMssage: this.deleteMssage
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}