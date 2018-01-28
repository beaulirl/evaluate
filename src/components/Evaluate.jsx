import React, { Component } from 'react';
import Mark from './Mark.jsx';

import './Evaluate.css';

export default class EvaluateComponent extends Component {
  render() {
    return (
    	<div className="evaluate">
	      <div className="header-container">
	        <div className="header">{this.props.evaluateData.title}
	      	</div>
	      	<div className="header-description">{this.props.evaluateData.description}
	      	</div>
	      </div>
	      <div className="mark-container">
	        <Mark employee="сотрудник"/>
	        <Mark employee="руководитель"/>
	      </div>
	    </div>      
      );
  }
}