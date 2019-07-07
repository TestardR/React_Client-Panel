import React, { Component } from 'react';

class Test extends Component {
  state = {
    test: '',
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  // Run only if components update
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // WILL BE DEPRECATED
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  // WILL BE DEPRECATED
  // Usually used with redux, on receiving new properties
  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps...');
  }

  // INSTEAD
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      test: 'something'
    };
  }

  // Renders before the state is mutated
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
