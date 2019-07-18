import React from 'react';
import Button from 'react-bootstrap/Button';

// import newRoutes from './newRoutes.json';

import ModeRoutesList from './ModeRoutesList';

import './RoutesList.css';

export default class RoutesList extends React.Component {

  state = {
    routes: [
      {name: 'route 1', rating: 9, mode: 'car'},
      {name: 'route 2', rating: 3, mode: 'transit'},
      {name: 'route 3', rating: 1, mode: 'walk'},
      {name: 'route 4', rating: 2, mode: 'bike'},
    ],
    newRoutes: {},
    // newRoutes,
    tabs: [
      {value: 'car', label: 'Car'},
      {value: 'transit', label: 'Transit'},
      {value: 'walk', label: 'Walk'},
      {value: 'bike', label: 'Bike'},
    ],
  };

  onSelectTab = (value) => {
    this.props.selectTab(value);
  }

  routeChange = (route) => {
    this.props.selectRoute(route);
  }

  componentDidMount() {
    this.setState({newRoutes: this.props.newRoutes});
  }

  render() {
    let buttons = this.state.tabs.map((item, index) => {
      return (
        <Button
          key={index}
          onClick={() => this.onSelectTab(item.value)}
          // variant={item.value === this.props.selected ? "primary" : "secondary"}
          className={item.value === this.props.selectedTab ? "btn-active" : "btn-inactive"}
        >
          {item.label}
        </Button>
      );
    });

    return (
      <div className="routesListContainer">
        <h3>Routes</h3>
        <div className="buttonContainer">{buttons}</div>
        <ModeRoutesList
          selectRoute={this.routeChange}
          selectedRoute={this.props.selectedRoute}
          selectedTab={this.props.selectedTab}
          routes={this.state.routes}
          newRoutes={this.props.newRoutes}
        />
      </div>
    );
  }
}