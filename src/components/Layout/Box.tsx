import React from 'react';
import './Box.scss';
import { hasClassName, hasStyle } from '../base/interfaces/component-props';
import Radium, { StyleRoot } from 'radium';

interface IRecipeProps extends hasClassName, hasStyle {

}
export default class Box extends React.Component<IRecipeProps> {
    static defaultProps = {
        style: {}
    }

    render() {
        return (
            <StyleRoot>
                <div
                    style={this.props.style}
                    className={["app-box", this.props.className].join(' ')}>
                    {this.props.children}
                </div>
            </StyleRoot>
        )
    }
}