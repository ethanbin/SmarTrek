import React from 'react';

import './ModeRoutesList.css';

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
      if (item.mode === this.props.selectedTab) {
        routes.push(item);
      }
    });
    return this.renderArray(routes);
  }

  onSelectRoute = (route) => {
    this.props.selectRoute(route);
  }

  renderNewArray = (array) => {
    return (
      array.map((item, index) =>
        <div
          key={index + 1}
          onClick={() => this.onSelectRoute(item)}
          className={"modeRoutesListRoute" + (this.props.selectedRoute === item ? " route-selected" : "")}
        >
          Route #{index + 1}: {Math.round(item.score)} safety rating, {item.time}
        </div>
      )
    )
  }

  renderNewRoutes = () => {
    let routes;
    switch (this.props.selectedTab) {
      case 'car':
        routes = this.props.newRoutes.driving;
        break;
      case 'transit':
        routes = this.props.newRoutes.transit;
        break;
      case 'walk':
        routes = this.props.newRoutes.walking;
        break;
      case 'bike':
        routes = this.props.newRoutes.bicycling;
        break;
      default:
        break;
    }
    return this.renderNewArray(routes);
  }

  render() {
    return (
      <div className="routesList">
        {/* <ul>{this.renderRoutes()}</ul> */}
        {this.renderNewRoutes()}
      </div>
    );
  }
}