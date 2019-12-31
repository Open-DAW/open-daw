import React from "react";

export default function Subtitle({ text, className }: any) {
    return (<h4 className={"subtitle text-mid col-text " + className}>{text}</h4>);
}