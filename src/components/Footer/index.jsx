import React from "react";
import { ROUTES } from "@/constants/routes";
import { Link } from "gatsby";

import "./style.scss";

export const Footer = () => {
  <footer className={'footer'}>
    {ROUTES.map((route) => {
      return <Link key={route.link} href={route.link}>{route.name}</Link>;
    })}
  </footer>
};
