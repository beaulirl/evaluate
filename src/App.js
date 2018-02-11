import React, { Component } from 'react';
import './App.css';

import EvaluateComponent from './components/Evaluate.jsx';

export default class GeneralEvaluateComponent extends Component {
  render() {
    const evaluateData = this.props.evaluateData;
    const evaluateList = evaluateData.map((ev) => <EvaluateComponent key={ev.title} evaluateData={ev}/>);
    return (
      <div className="general-eval">
        {evaluateList}
      </div>
    );
  }
}
