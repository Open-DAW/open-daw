import React from "react";

export default function TextMutted({ style, text, className }: any) {
    return (
        <p
            className={"text-mutted col-mutted " + className}
            style={style}
        >
            {text}
        </p>
    );
}