import React from 'react';
import Checkbox from '../../forms/Checkbox';
import RackButton from '../UI/RackButton';
import NumberSelect from '../../forms/NumberSelect';
import ActiveIndicator from './ActiveIndicator';
import CRPatternKey from './CRPatternKey';
import Knob from '../../forms/Knob';

interface IRecipeProps {
    octaves: number;
    name: string;
}
interface IRecipeState {
    active?: boolean;
    octaves: number;
    gain: number;
    pan: number;
}
export default class ChannelRackItem extends React.Component<IRecipeProps, IRecipeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            active: false,
            octaves: this.props.octaves,
            gain: 100,
            pan: 50,
        }
    }

    static defaultProps = {
        octaves: 2,
        name: 'Test',
    }

    onFocus = () => {
        this.setState({ active: true });
    }

    onBlur = () => {
        this.setState({ active: false });
    }

    renderPatternKeys() {
        let octaves: any[] = [];
        for (let i = 0; i < this.props.octaves; i++) {
            octaves.push(
                <div key={i} className="octave">
                    <CRPatternKey />
                    <CRPatternKey />
                    <CRPatternKey />
                    <CRPatternKey />
                    <CRPatternKey color="red" />
                    <CRPatternKey color="red" />
                    <CRPatternKey color="red" />
                    <CRPatternKey color="red" />
                    <CRPatternKey />
                    <CRPatternKey />
                    <CRPatternKey />
                    <CRPatternKey />
                    <CRPatternKey color="red" />
                    <CRPatternKey color="red" />
                    <CRPatternKey color="red" />
                    <CRPatternKey color="red" />
                </div>
            );
        }
        return octaves;
    }

    render() {
        return (
            <div key={this.props.name} className="channel-rack-item" tabIndex={-1}>
                <Checkbox disabled active={this.state.active} onChange={(active) => this.setState({ active })} />
                <Knob value={this.state.pan} />
                <Knob value={this.state.gain} />
                <NumberSelect />
                <RackButton label={this.props.name} style={{ marginRight: 0 }} />
                <ActiveIndicator active={this.state.active} />
                {this.renderPatternKeys()}
            </div>
        )
    }
}