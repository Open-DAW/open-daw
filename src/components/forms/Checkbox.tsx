import React from 'react';
import { hasOnChange } from '../base/interfaces/component-props';
import './styles/Checkbox.scss';

interface IRecipeProps extends hasOnChange {
    active?: boolean;
    disabled?: boolean;
    onChange?: (val: boolean | undefined) => any;
}
export default class Checkbox extends React.Component<IRecipeProps> {
    static defaultProps = {
        active: false,
        disabled: false,
    }

    onClick = () => {
        if (this.props.disabled) return;
        this.props.onChange && this.props.onChange(!this.props.active);
    }

    render() {
        return (
            <div
                className={[
                    this.props.active ? 'checkbox active' : 'checkbox',
                    this.props.disabled ? 'disabled' : ''
                ].join(' ')
                }
                onClick={this.onClick}>
                <span></span>
            </div>
        )
    }
}