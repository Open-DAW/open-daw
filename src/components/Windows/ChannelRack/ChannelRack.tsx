import React from 'react';
import './ChannelRack.scss';

import { Scrollbars } from 'react-custom-scrollbars';
import ChannelRackHeader from './ChannelRackHeader';
import ChannelRackFooter from './ChannelRackFooter';
import { RackItem } from '../../../entities/RackItem';
import ChannelRackItem from '../../DAW/ChannelRack/ChannelRackItem';
import AppWindow from '../../Window/Window';

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
            rackItems: [],
            octaves: 2,
        };
    }

    componentDidMount() {
        this.setState({
            rackItems: [
                new RackItem('Kick'),
                new RackItem('Snare'),
                new RackItem('Hat'),
            ]
        });
    }

    addRackItem(name: string) {
        this.setState({ rackItems: [...this.state.rackItems, new RackItem(name + this.state.rackItems.length)] });
    }
    onChangeOctave = (octaves) => this.setState({ octaves });
    onAddRackItem = () => this.addRackItem('Sample');


    render() {
        return (
            <AppWindow className="channel-rack" title="Channel Rack" style={{ minWidth: '665px' }}>
                <ChannelRackHeader onChangeOctave={this.onChangeOctave} />
                <Scrollbars
                    autoHide
                    autoHideTimeout={300}
                    autoHideDuration={200}
                    autoHeight
                    autoHeightMin={100}
                    autoHeightMax={280}
                    style={{ width: 665, minHeight: 100, height: 'auto' }}>
                    {this.state.rackItems.map(
                        item => <ChannelRackItem key={item.name} name={item.name} octaves={this.state.octaves} />
                    )}
                </Scrollbars>
                <ChannelRackFooter onAdd={this.onAddRackItem} />
            </AppWindow>
        );
    }
}