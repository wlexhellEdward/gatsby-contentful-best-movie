import React from "react";
import view from "@/images/poster/view.png";
import ratingImg from "@/images/poster/rating.svg";
import { setMaximumSizeToPoster } from "@/utils/string/setMaximumSize";

import"./styles.scss";
import { Link } from "gatsby";

export const PosterInfo = ({
  title,
  description,
  running_time,
  wikki,
  rating,
}) => {
  return (
    <div className={'outterPosterInfo'}>
      <h2>{title?.toUpperCase()}</h2>
      <div className={'descriptionPoster'}>
        <span>{setMaximumSizeToPoster(description)}</span>
      </div>
      <div className={'addictionInfoPoster'}>
        <div className={'outterImgDescription'}>
          <img src={view} class="image-addiction-poster-info" alt={title}/>
          <span>{running_time}</span>
        </div>
        <div className={'outterImgDescription'}>
          <Link href={wikki}>Wiki</Link>
        </div>
        <div className={'outterImgDescription'}>
          <img src={ratingImg} alt={title} class="image-addiction-poster-info" />
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};
