import React from 'react';
interface IRecipeProps {
    active?: boolean;
    disabled?: boolean;
    onChange?: (val: boolean | undefined) => any;
}
export default class Checkbox extends React.Component<IRecipeProps> {
    static defaultProps = {
        active: false,
        disabled: false,
    }

    constructor(props: any) {
        super(props);
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