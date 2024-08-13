import React from "react";
import { Placemark, useYMaps } from "@pbe/react-yandex-maps";
import {
  createBalloonLayout,
  createMarkerLayout,
} from "@/utils/map/createLayout";
import homeIcon from "@/images/map/homeIcon.svg";

const CustomMarker = ({ id, geo }) => {
  const ymaps = useYMaps(["templateLayoutFactory"]);

  if (!ymaps) {
    return <span>Ymaps is undefined</span>;
  }

  const markerLayout = createMarkerLayout({ ymaps, id });
  const balloonLayout = createBalloonLayout({ ymaps, id });

  return (
    <Placemark
      geometry={geo}
      options={{
        iconLayout: markerLayout,
        iconImageHref: homeIcon.src,
        iconImageSize: [30, 42],
        iconImageOffset: [-15, -42],
        balloonContentLayout: balloonLayout,
      }}
      modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
    />
  );
};

export default CustomMarker;
