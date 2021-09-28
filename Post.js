import React, { Component } from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: [] };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'This is new Title',
        body: 'Hello body.',
        userId: 2,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          user: json,
        });
      });
  }
  render() {
    return (
      <div>
        <p>
          <b>New Resource created in the server </b>
        </p>
        <p>Id : {this.state.user.id}</p>
        <p>Title : {this.state.user.title}</p>
        <p>Body : {this.state.user.body}</p>
        <p>UserId : {this.state.user.userId}</p>
      </div>
    );
  }
}

export default Post;
