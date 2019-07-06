import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };
  render() {
    return (
      <div className="card mb-3">
        <h1 className="card-header">Add Contact</h1>
        <div className="card-body">
          <form action="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control form-control-lg"
              placeholder="Enter Name..."
            />
          </form>
          <form action="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control form-control-lg"
              placeholder="Enter Email..."
            />
          </form>
          <form action="form-group">
            <label htmlFor="phone">phone</label>
            <input
              type="text"
              name="Phone"
              className="form-control form-control-lg"
              placeholder="Enter Phone..."
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
