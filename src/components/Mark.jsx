import React, { Component } from 'react';

import './Mark.css';

export default class Mark extends Component {
  constructor(props) {
  	super(props);
  	this.handleChange = this.handleChange.bind(this);
  	this.state = {
  		value: '',
      divStyle: {
        color: 'black',
      },
  	};
  }

  handleChange(event) {
  	const values = ['A', 'B', 'C', 'D', 'E', 'F', '', 'a', 'b', 'c', 'd', 'e', 'f'];
    const colorDict = {
      'A': 'green',
      'B': 'green',
      'C': 'yellow',
      'D': 'brown',
      'F': 'red',
    };
    const value = event.target.value.toUpperCase();
  	if (values.includes(value)) {
        this.setState({
          value: value,
          divStyle: {color: colorDict[value]}, 
        });
      }
    }
  
  render() {
    return (
      <div className="mark">
        <input type="text" className="mark-value" style={this.state.divStyle} onChange={this.handleChange} value={this.state.value}/>
        <div className="mark-description" contentEditable="true"></div>
      </div>
      );
  }
}
