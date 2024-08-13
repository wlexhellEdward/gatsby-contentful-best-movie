import "@/components/CustomMarker/styles.scss";
import homeIcon from "@/images/map/homeIcon.svg";

export const createMarkerLayout = ({ ymaps, id }) => {
  const markerLayout = ymaps.templateLayoutFactory.createClass(
    `
    <div class="${'customMarker'}" >
        <img src="${homeIcon}" class="${'customMarkerIcon'}" />
        <span class="${'customMarkerText'}">Marker №${id}</span>
    </div>
        <span class="${'customHoverText'}">You are not here</span>
    `,
    {
      build: function () {
        markerLayout.superclass.build.call(this);
        this.getData().options.set("shape", {
          type: "Circle",
          coordinates: [0, 0],
          radius: 150 / 2,
        });
        const cutsomHoverText = this.getParentElement().getElementsByClassName(
          'customHoverText'
        )[0];
        this.getData().geoObject.events.add(
          "mouseenter",
          () => {
            cutsomHoverText.style.opacity = 1;
          },
          this
        );
        this.getData().geoObject.events.add(
          "mouseleave",
          () => {
            cutsomHoverText.style.opacity = 0;
          },
          this
        );
      },
    }
  );
  return markerLayout;
};

export const createBalloonLayout = ({ ymaps, id }) => {

  const balloonLayout = ymaps.templateLayoutFactory.createClass(
    `<div class="${'balloon'}">
        <div class="${'outterTitleImage'}">
            <img src="${homeIcon}" alt="image for Custom Marker"/>
            <h4 class="${'titleBalloon'}">MARKER  №${id}</h4>
        </div>
        <div class="${'description'}">
          <span>Some description about this place, maybe smth interesting of history...</span>
        </div>
        <div class="${'actions'}">
          <a href="/">Press me</a>
          <a href="/">Or me</a>
        </div>
      </div>`,
    {
      build: function () {
        balloonLayout.superclass.build.call(this);
      },
    }
  );
  return balloonLayout;
};
