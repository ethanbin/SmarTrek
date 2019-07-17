import React from 'react';

export default class ModeRoutesList extends React.Component {
  render() {
    let element;
    switch (this.props.selected) {
      case 'car':
      case 'transit':
      case 'walk':
      case 'bike':
      default:
        element = <p>Please select a tab.</p>
    }
    return (
      <div>
        {this.props.selected}
      </div>
    );
  }
}