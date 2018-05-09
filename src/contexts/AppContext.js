import React from "react";

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  state = {
    messages: []
  };

  addMessage = message => {
    this.setState({
      messages: state.messages.concat(message)
    });
  };

  deleteMssage = index => {
    return {
      messages: [
        ...state.messages.slice(0, index),
        ...state.messages.slice(index + 1, state.messages.length)
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
