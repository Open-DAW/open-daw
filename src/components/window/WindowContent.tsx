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
            <ResizableBox>
                <div className={["window-content", this.props.className].join(' ')}
                    style={
                        (this.props.collapsed)
                            ? { height: '0%' }
                            : { height: '100%' }
                    }>
                    {this.props.children}
                </div>
            </ResizableBox>
        );
    }
}