import React from 'react';
import './styles/Button.scss';
import { hasClassName, hasStyle, hasNavigation, hasOnClick } from '../base/interfaces/component-props';
import { withNavigation } from '@react-navigation/core';

interface IRecipeProps extends hasClassName, hasStyle, hasOnClick, hasNavigation {
    label?: string;
    toRoute?: string;
    icon?: boolean;
    disabled?: boolean;
    transparent?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
    tip?: string;
}
export class Button extends React.Component<IRecipeProps> {
    static defaultProps = {
        type: 'button',
        label: null,
        disabled: false,
    };

    handleOnClick = (event) => {
        if (this.props.toRoute) {
            this.props.navigation.navigate(this.props.toRoute);
        } else if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render() {
        return (
            <button
                data-tip={this.props.tip}
                disabled={this.props.disabled}
                onClick={this.handleOnClick}
                style={this.props.style}
                type={this.props.type}
                className={
                    ["button",
                        this.props.className,
                        this.props.icon ? 'icon' : '',
                        this.props.transparent ? 'transparent' : '',
                    ].join(' ')}
            >
                {this.props.label || this.props.children}
            </button>
        )
    }
}

export const ButtonNav = withNavigation(Button);
