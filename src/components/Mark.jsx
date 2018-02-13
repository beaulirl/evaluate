import React, { Component } from 'react';

import './Mark.css';

export default class Mark extends Component {
  constructor(props) {
  	super(props);
  	this.handleChange = this.handleChange.bind(this);
  	this.state = {
  		value: '',
      divStyle: 'mark-value',
  	};
  }

  handleChange(event) {
    const colorDict = {
      'A': 'well-valued',
      'B': 'well-valued',
      'C': 'middle-valued',
      'D': 'low-valued',
      'E': 'low-valued',
      'F': 'unvalued',
    };
    const value = event.target.value.toUpperCase();
    console.log(event.target.value);
  	if (Object.keys(colorDict).includes(value) || value === '') {
        this.setState({
          value: value,
          divStyle: "mark-value " + colorDict[value],
        });
      }
    }

  render() {
    return (
      <div className="mark">
        <input type="text" className={this.state.divStyle} onChange={this.handleChange} value={this.state.value}/>
        <div className="mark-description" contentEditable="true"></div>
      </div>
      );
  }
}
