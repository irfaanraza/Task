import React, { Component } from 'react';

class Get extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.headers = [
      { key: 'userId', label: 'User ID' },
      { key: 'id', label: 'ID' },
      { key: 'title', label: 'Title' },
      { key: 'body', label: 'Body' },
    ];
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          users: result,
        });
      });
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.headers.map((h) => {
              return <th key={h.key}>{h.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Get;
