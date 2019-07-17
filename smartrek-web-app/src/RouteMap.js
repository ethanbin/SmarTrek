import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

import './RouteMap.css';

/**
 * TODO
 * - figure out an api key to render the map
 * - go over the website again to find route displaying
 * https://tomchentw.github.io/react-google-maps/
 */

export default class RouteMap extends React.Component {
  render() {

    const MyMapComp = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 32, lng:  34}}
      >
        {props.isMarkerShown &&
          <Marker position={{ lat: 32, lng: 34 }} />}
      </GoogleMap>
    ));

    return (
      <div className="routeMapContainer">
        <p>map of selected route will be shown here</p>
        <MyMapComp
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}