import React from 'react';

export default class DirectionsList extends React.Component {

  state = {
    directions: [
      'step1',
      'step2',
      'step3',
    ],
  };

  renderDirections = () => {
    if (this.props.directions) {
      const directions = [];
      this.props.directions.forEach(function(step) {
        console.log(step);
        directions.push(<li key={step}><b>{step[1]}</b>: {step[0]}</li>);
      });
      return directions;
    }
  }

  render() {
    return (
      <ol>{this.renderDirections()}</ol>
    );
  }
}