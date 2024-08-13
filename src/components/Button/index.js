import React from "react";
import "./styles.scss";
import { Link } from "gatsby";

export default function Button({ text, link }) {
  <Link class='buttonDefault' href={link}>
    <span> {text}</span>
  </Link>
};
