import React, { Component, Fragment } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Romain Testard",
        email: "r@gmail.com",
        phone: "666-666-6666"
      },
      {
        id: 2,
        name: "Maiha Nguyen",
        email: "mn@gmail.com",
        phone: "111-111-1111"
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </Fragment>
    );
  }
}

export default Contacts;
