import React, { Component } from 'react'

export default class Notification extends Component {
    render() {
        const {message } = this.props
    return (
        <div>{message }</div>
    )
  }
}
