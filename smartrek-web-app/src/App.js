import React from 'react';

import LocationInput from './LocationInput';
import RoutesList from './RoutesList';
import RouteMap from './RouteMap';
import RouteDirections from './RouteDirections';

import './App.css';

export default class App extends React.Component {

  state = {
    selectedTab: 'car',
    selectedRoute: {},
    routes: {},
  };

  pageChange = (value) => {
    if (!(value === this.state.selectedTab)) {
      this.setState({selectedTab: value});
    }
  };

  routeChange = (route) => {
    if (!(route === this.state.selectRoute)) {
      this.setState({selectedRoute: route});
    }
  };

  loadRoutes = (routes) => {
    this.setState({routes: routes});
  }

  render() {
    return (
      <div className="appContainer">
        <div className="leftContainer">
          <h1>SmarTrek</h1>
          <LocationInput
            loadRoutes={this.loadRoutes}
          />
          <RoutesList
            selectRoute={this.routeChange}
            selectedRoute={this.state.selectedRoute}
            selectTab={this.pageChange}
            selectedTab={this.state.selectedTab}
            newRoutes={this.state.routes}
          />
        </div>
        <div className="rightContainer">
          <RouteMap points={this.state.selectedRoute.points} />
          <RouteDirections selectedRoute={this.state.selectedRoute} />
        </div>
      </div>
    );
  }
}