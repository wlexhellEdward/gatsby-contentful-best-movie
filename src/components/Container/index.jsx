import React from "react";
import "./styles.scss";

export default function Container({
    children,
}) {
    return <div className={'main'}>{children}</div>;
}
