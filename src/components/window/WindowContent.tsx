import React from 'react';
import { hasClassName } from '../base/interfaces/component-props';
import { Resizable, ResizableBox } from 'react-resizable';

interface IRecipeProps extends hasClassName {
    collapsed: boolean;
}
export default class WindowContent extends React.Component<IRecipeProps> {
    static defaultProps = {
        collapsed: false,
    }

    render() {
        return (
            <div className={["window-content", this.props.className].join(' ')}>
                {this.props.children}
            </div>
        );
    }
}