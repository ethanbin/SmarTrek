import React from 'react';

export default class ModeRoutesList extends React.Component {
  
  renderArray = (array) => {
    return (
      array.map((item, index) =>
        <li key={index + 1}>Route #{index + 1}: {item.name} - {item.rating} safety rating</li>
      )
    )
  }

  renderRoutes = () => {
    const routes = [];
    this.props.routes.forEach((item, index) => {
      if (item.mode === this.props.selected) {
        routes.push(item);
      }
    });
    return this.renderArray(routes);
  }

  render() {
    return (
      <div>
        {this.renderRoutes()}
      </div>
    );
  }
}