import React, { Component } from 'react';

import './Mark.css';

export default class Mark extends Component {
  render() {
    return (
      <div className="mark">
        <input type="text" className="mark-value" />
        <div className="mark-description" contenteditable="true"></div>
        <div className="mark-author">/ {this.props.employee}</div>
      </div>
      );
  }
}
