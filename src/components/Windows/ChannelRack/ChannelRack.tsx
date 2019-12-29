import React from 'react';
import './ChannelRack.scss';

import Window from '../../window/Window';
import ChannelRackHeader from './ChannelRackHeader';
import ChannelRackFooter from './ChannelRackFooter';
import ChannelRackItem from '../../daw/ChannelRack/ChannelRackItem';
import { RackItem } from '../../../entities/RackItem';

interface IRecipeProps {

}

interface IRecipeState {
    rackItems: RackItem[];
    octaves: number;
}
export default class ChannelRack extends React.Component<IRecipeProps, IRecipeState> {
    static defaultProps = {

    }

    constructor(props: any) {
        super(props);
        this.state = {
            rackItems: [
                new RackItem('Kick'),
                new RackItem('Snare'),
                new RackItem('Hihat'),
            ],
            octaves: 1,
        };
    }

    onChangeOctave = (octaves) => this.setState({ octaves });

    render() {
        return (
            <Window className="channel-rack" title="Channel Rack" style={{ minWidth: '565px' }}>
                <ChannelRackHeader onChangeOctave={this.onChangeOctave} />
                {this.state.rackItems.map(
                    item => <div key={item.name}><ChannelRackItem name={item.name} octaves={this.state.octaves} /></div>
                )}
                <ChannelRackFooter />
            </Window>
        );
    }
}