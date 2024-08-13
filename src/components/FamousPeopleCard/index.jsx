import React from "react";
import"./styles.scss";

export const FamousPeopleCard = ({ title, names }) => (
  <div className={'wrapperFamousPeopleCard'}>
    <span>{names.length > 1 ? `${title}s` : title}</span>
    <div className={'containerNames'}>
      {names.map((name) => (
        <span key={name}>{name}</span>
      ))}
    </div>
  </div>
);
