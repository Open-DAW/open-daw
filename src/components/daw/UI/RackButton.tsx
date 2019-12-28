import React from 'react';
import { hasStyle } from '../../base/interfaces/component-props';

interface IRecipeProps extends hasStyle {
    content?: string;
}
export default class RackButton extends React.Component<IRecipeProps> {
    static defaultProps = {
        content: 'Button',
    }

    render() {
        return (
            <button
                style={this.props.style}
                className="rack-button">
                <span className="mono-text-small col-gray-light">{this.props.content}</span>
            </button>
        )
    }
}