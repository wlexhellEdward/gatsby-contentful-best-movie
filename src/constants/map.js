import Leaflet from "leaflet";
import homeMarker from "@/images/map/homeIcon.svg";
import personMarker from "@/images/map/marker.png";

export const MAP_STATE = {
  center: [55.158066, 30.214017],
  zoom: 10,
};

export const INDEX_HOME_MARKER = 52

export const CENTER = {
  lat: 55.1580922553979,
  lng: 30.214000021984057,
};

export const LEAFLET_URL = "https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png";

export const HOME_ICON = Leaflet.icon({
  iconUrl: homeMarker.src,
  shadowUrl: homeMarker.src,

  iconSize: [32, 32],
  shadowSize: [0, 0],
});

export const HUMAN_ICON = Leaflet.icon({
  iconUrl: personMarker.src,
  shadowUrl: personMarker.src,

  iconSize: [32, 32],
  shadowSize: [0, 0],
});
