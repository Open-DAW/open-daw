import React from 'react';
import './ChannelRack.scss';
import { hasStyle } from '../../base/interfaces/component-props';

interface IRecipeProps extends hasStyle {
    active?: boolean;
    color: string;
}
interface IRecipeState {
    active?: boolean;
}
export default class CRPatternKey extends React.Component<IRecipeProps, IRecipeState> {
    static defaultProps = {
        active: false,
        color: 'blue',
        style: {},
    }

    constructor(props: any) {
        super(props);
        this.state = {
            active: false,
        };
    }

    onClick = () => {
        this.setState({ active: !this.state.active });
    }

    render() {
        return (
            <div
                style={this.props.style}
                className={[
                    this.state.active ? 'channel-rack-key active' : 'channel-rack-key',
                    this.props.color
                ].join(' ')
                }
                onClick={this.onClick}
            >
                <div className="channel-rack-key-hole"></div>
            </div>
        )
    }
}
