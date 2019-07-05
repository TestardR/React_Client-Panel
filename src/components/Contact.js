import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {
      showContactInfo: true
    };
    this.onShowClick = this.onShowClick.bind(this);
  }

  onShowClick() {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  }

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i onClick={this.onShowClick} className="fas fa-sort-down" />
        </h4>
        {showContactInfo && (
          <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
          </ul>
        )}
      </div>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

export default Contact;
