import React from "react";
import { MOVIE_ROUTE } from "@/constants/routes";
import { Link } from "gatsby";


import "./styles.scss";

export default function CardMovie({
  slug,
  poster,
  title,
  release_date,
}) {
  return (
    <Link href={MOVIE_ROUTE + slug} className={'cardMovie'}>
      <img
        src={poster}
        alt={title}
      />
      <div className={'descriptionCardMovie'}>
        <span>{title}</span>
        <span>{release_date}</span>
      </div>
    </Link>
  );
};
