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
        directions.push(<li key={step}>{step}</li>);
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