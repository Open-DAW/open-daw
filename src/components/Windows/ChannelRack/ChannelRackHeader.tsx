import React from 'react';
import NumberSelect from '../../Forms/NumberSelect';
import Slider from 'rc-slider';
import { Button } from '../../Forms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faVolumeUp, faVolumeOff } from '@fortawesome/free-solid-svg-icons';

interface IRecipeProps {
    octaves: number;
    swing: number;
    isPlaying: boolean;
    onChangeOctave: (octaves: number) => any;
    onPlayChange: (playing: boolean) => any;
}
interface IRecipeState {
    swing: number;
}
export default class ChannelRackHeader extends React.Component<IRecipeProps, IRecipeState> {
    static defaultProps = {
        octaves: 1,
        swing: 0,
    }

    public state = {
        swing: this.props.swing
    }

    setSwing = (v) => {
        this.setState({ swing: v });
    }

    render() {
        return (
            <div className="channel-rack-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button
                    tip="Play/stop Pattern"
                    transparent
                    onClick={() => this.props.onPlayChange(!this.props.isPlaying)}
                >
                    <FontAwesomeIcon icon={this.props.isPlaying ? faVolumeUp : faVolumeOff} />
                </Button>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: 100 }} data-tip="Swing">
                        <Slider onChange={this.setSwing} min={0} max={100} value={this.state.swing} />
                    </div>
                    <div style={{ marginLeft: '10px' }} data-tip="Toggle pattern view">
                        <svg width="23" height="12" viewBox="0 0 31 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.26667 1C8.26667 0.447715 7.81895 0 7.26667 0H1C0.447715 0 0 0.447716 0 1V17C0 17.5523 0.447716 18 1 18H7.26667C7.81895 18 8.26667 17.5523 8.26667 17V1ZM6.2 5C6.2 4.44772 5.75228 4 5.2 4H3.06667C2.51438 4 2.06667 4.44772 2.06667 5C2.06667 5.55228 2.51438 6 3.06667 6H5.2C5.75228 6 6.2 5.55228 6.2 5Z" fill="#D4C280" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.6333 1C19.6333 0.447715 19.1856 0 18.6333 0H12.3667C11.8144 0 11.3667 0.447716 11.3667 1V17C11.3667 17.5523 11.8144 18 12.3667 18H18.6333C19.1856 18 19.6333 17.5523 19.6333 17V1ZM17.5667 5C17.5667 4.44772 17.119 4 16.5667 4H14.4333C13.8811 4 13.4333 4.44772 13.4333 5C13.4333 5.55228 13.8811 6 14.4333 6H16.5667C17.119 6 17.5667 5.55228 17.5667 5Z" fill="#D4C280" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M31 1C31 0.447715 30.5523 0 30 0H23.7333C23.1811 0 22.7333 0.447716 22.7333 1V17C22.7333 17.5523 23.1811 18 23.7333 18H30C30.5523 18 31 17.5523 31 17V1ZM28.9333 5C28.9333 4.44772 28.4856 4 27.9333 4H25.8C25.2477 4 24.8 4.44772 24.8 5C24.8 5.55228 25.2477 6 25.8 6H27.9333C28.4856 6 28.9333 5.55228 28.9333 5Z" fill="#D4C280" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}