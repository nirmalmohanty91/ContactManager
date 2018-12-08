import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Nirmal Mohanty",
        email: "nirmalmhnt@gmail.com",
        phone: "9087607304"
      },
      {
        id: 2,
        name: "Batman",
        email: "batman@gmail.com",
        phone: "20937476573"
      },
      {
        id: 3,
        name: "Robins",
        email: "robin@gmail.com",
        phone: "20392857437"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
