import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { id } = this.props.match.params;
    const { greetingMessage } = this.props;
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingMessage }, My awesome Users component, { id } </p>
      </div>
    );
  }
};

export default Users;
