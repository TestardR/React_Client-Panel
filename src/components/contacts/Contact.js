import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {
      showContactInfo: false
    };
    this.onShowClick = this.onShowClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onShowClick() {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  }

  onDeleteClick(id, dispatch) {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  }

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                  onClick={this.onShowClick}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo && (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

export default Contact;