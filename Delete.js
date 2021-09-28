import React, { Component } from 'react';

class Delete extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    });
  }
  render() {
    return (
      <div>
        <p>
          <b>Data deleted in the server</b>
        </p>
      </div>
    );
  }
}

export default Delete;
