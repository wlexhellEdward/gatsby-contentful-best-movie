import React from "react";
import { Map, Clusterer } from "@pbe/react-yandex-maps";
import CustomMarker from "@/components/CustomMarker";
import { INDEX_HOME_MARKER, MAP_STATE } from "@/constants/map";
import "./styles.scss";

const generateRandomMarkers = () => {
  const geos = [];
  for (let i = 0; i < 0; i++) {
    geos.push([Math.random() * 50, Math.random() * 50]);
  }
  return geos;
};

const MapYandex = () => {
  const markers = generateRandomMarkers();

  const renderMarkers = () => {
    return markers.map((geo, index) => (
      <CustomMarker
        id={index.toString()}
        key={index}
        geo={geo}
      />
    ));
  };


  return (
      <Map className={'containerMap'} defaultState={MAP_STATE}>
        <CustomMarker
          id={INDEX_HOME_MARKER.toString()}
          geo={MAP_STATE.center}
        />
        <Clusterer>{renderMarkers()}</Clusterer>
      </Map>
  );
};

export default MapYandex;
