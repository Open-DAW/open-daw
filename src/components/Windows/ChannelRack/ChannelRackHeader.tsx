import React from 'react';
import NumberSelect from '../../forms/NumberSelect';

interface IRecipeProps {
    octaves: number;
    onChangeOctave: (octaves: number) => any
}
interface IRecipeState {
    octaves: number;
}
export default class ChannelRackHeader extends React.Component<IRecipeProps, IRecipeState> {
    static defaultProps = {
        octaves: 1,
    }

    render() {
        return (
            <div className="channel-rack-header">
                <NumberSelect
                    min={0}
                    max={256}
                    step={1}
                    value={this.props.octaves}
                    onChange={this.props.onChangeOctave}
                />
            </div>
        )
    }
}