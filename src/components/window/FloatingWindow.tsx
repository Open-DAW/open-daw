import React from 'react';
import Draggable from 'react-draggable';
import './FloatingWindow.scss';
import { hasStyle, hasClassName } from '../base/interfaces/component-props';

interface IRecipeProps extends hasStyle, hasClassName {
    active: boolean;
    grid?: number[] | any;
}
interface IRecipeState { }
export default class FloatingWindow extends React.Component<IRecipeProps, IRecipeState> {
    static defaultProps = {
        active: false,
        style: { width: '600px', height: '300px' },
        grid: [50, 50]
    }

    render() {
        return (
            <Draggable
                grid={this.props.grid}
                scale={1}
                handle=".window-header"
                bounds="parent"
            >
                <div style={this.props.style} className={["floating-window", this.props.className].join(' ')}>
                    {this.props.children}
                </div>
            </Draggable>
        )
    }
}