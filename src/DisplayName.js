import React, { Component } from 'react';

export class DisplayName extends Component {
  render() {
  return(
    <h1>Hello {this.props.first} - {this.props.last}</h1>
  )
}
}
