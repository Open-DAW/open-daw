import React from 'react';
import { hasStyle, hasOnClick } from '../../base/interfaces/component-props';

interface IRecipeProps extends hasStyle, hasOnClick {
    label?: string;
}
export default class RackButton extends React.Component<IRecipeProps> {
    static defaultProps = {
        label: 'Button',
    }

    render() {
        return (
            <button
                style={this.props.style}
                onClick={this.props.onClick}
                className="rack-button">
                <span className="mono-text-small col-gray-light">{this.props.label}</span>
            </button>
        )
    }
}