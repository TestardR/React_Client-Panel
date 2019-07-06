import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };
  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <h1 className="card-header">Add Contact</h1>
        <div className="card-body">
          <form>
            <div action="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                value={name}
              />
            </div>
            <div action="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                value={email}
              />
            </div>
            <div action="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                value={phone}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
              style={{ marginTop: '1rem' }}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
