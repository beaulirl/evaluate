import React, { Component } from 'react';

import './Mark.css';

export default class Mark extends Component {
  constructor(props) {
  	super(props);
  	this.handleChange = this.handleChange.bind(this);
  	this.state = {
  		value: '',
  	};
  }

  handleChange(event) {
  	const values = ['A', 'B', 'C', 'D', 'E', 'F', '']
  	    if (values.includes(event.target.value)) {
  	    	this.setState({value: event.target.value});
  	    }
  	}
  
  render() {
    return (
      <div className="mark">
        <input type="text" className="mark-value" onChange={this.handleChange} value={this.state.value}/>
        <div className="mark-description" contentEditable="true"></div>
        <div className="mark-author">/ {this.props.employee}</div>
      </div>
      );
  }
}
