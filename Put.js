import React, { Component } from 'react';
class Put extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: [] };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'Updated Title',
        body: 'Updated Body',
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
        console.log(json);
        this.setState({
          user: json,
        });
      });
  }
  render() {
    return (
      <div>
        <p>
          <b> updated data in the server</b>
        </p>
        <p>Id : {this.state.user.id}</p>
        <p>Title : {this.state.user.title}</p>
        <p>Body : {this.state.user.body}</p>
        <p>UserId : {this.state.user.userId}</p>
      </div>
    );
  }
}
export default Put;
