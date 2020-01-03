import React from "react";

export default class ComponentBase<Props = any, State = any> extends React.Component<Props, State> {
    public handlers: { [key: string]: (keyEvent?: KeyboardEvent) => void } = {};
}
