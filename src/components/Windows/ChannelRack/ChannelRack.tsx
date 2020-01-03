import React from 'react';
import './ChannelRack.scss';

import { Scrollbars } from 'react-custom-scrollbars';
import ChannelRackHeader from './ChannelRackHeader';
import ChannelRackFooter from './ChannelRackFooter';
import { RackItem } from '../../../entities/RackItem';
import ChannelRackItem from '../../DAW/ChannelRack/ChannelRackItem';
import AppWindow from '../../Window/Window';
import * as Tone from 'tone';
import { Instrument } from '../../../entities/Instrument';
import { Sampler } from '../../../entities/DefaultIntruments/Sampler';
import { Sample } from '../../../entities/Sample';
// import kick from '../../../assets/samples/lofi-kick.wav';

interface IRecipeProps {

}



interface IRecipeState {
    rackItems: RackItem[];
    octaves: number;
    isPlaying: boolean;
}
export default class ChannelRack extends React.Component<IRecipeProps, IRecipeState> {
    static defaultProps = {

    }

    constructor(props: any) {
        super(props);
        this.state = {
            rackItems: [],
            octaves: 2,
            isPlaying: false,
        };
    }

    public channelItemRefs: (ChannelRackItem | null)[] = [];

    componentDidMount() {
        const synth = new Tone.PluckSynth();
        const reverb = new Tone.Reverb({
            decay: 2.5,
            preDelay: 1.21
        });
        const pingpong = new Tone.PingPongDelay({
            delayTime: 0.25,
            maxDelayTime: 1
        });
        const sampleKick = new Sample('kick', '/lofi-kick.wav');
        const sampleSnare = new Sample('snare', '/dilla-snare.wav');
        const sample2 = new Sample('knock-fingers-on-the-table', '/knock-fingers-on-the-table.wav');

        this.setState({
            rackItems: [
                new RackItem('Synth', new Instrument('synth', synth, [reverb, pingpong])),
                new RackItem('Kick', new Sampler(sampleKick)),
                new RackItem('Snare', new Sampler(sampleSnare)),
                new RackItem('knock-fingers', new Sampler(sample2)),
            ]
        });
    }

    addRackItem(name: string) {
        // this.setState({ rackItems: [...this.state.rackItems, new RackItem(name + this.state.rackItems.length)] });
    }
    onChangeOctave = (octaves) => this.setState({ octaves });
    onAddRackItem = () => this.addRackItem('Sample');
    playChanged = (isPlaying) => {
        this.setState({ isPlaying });

        for (let item of this.channelItemRefs) {
            if (item && isPlaying) {
                console.log('item', item.props.name);
                item.runSequence();
            } else if (item) {
                item.stopSequence();
            }
        }
    };

    render() {
        return (
            <AppWindow
                x={210}
                y={5}
                width={665}
                maxWidth={665}
                minWidth={665}
                height={190}
                minHeight={190}
                maxHeight={450}
                className="channel-rack" title="Channel Rack">
                <ChannelRackHeader
                    isPlaying={this.state.isPlaying}
                    onPlayChange={this.playChanged}
                    onChangeOctave={this.onChangeOctave} />
                <Scrollbars
                    autoHide
                    autoHideTimeout={300}
                    autoHideDuration={200}
                    autoHeight
                    autoHeightMin={100}
                    autoHeightMax={280}
                    style={{ width: 665, minHeight: 100, height: 'auto' }}>
                    {this.state.rackItems.map(
                        item => (
                            <ChannelRackItem
                                ref={ref => {
                                    if (!(this.channelItemRefs.includes(ref))) {
                                        this.channelItemRefs.push(ref)
                                    }
                                }}
                                item={item}
                                key={item.name}
                                name={item.name}
                                octaves={this.state.octaves}
                            />
                        )
                    )}
                </Scrollbars>
                <ChannelRackFooter onAdd={this.onAddRackItem} />
            </AppWindow>
        );
    }
}