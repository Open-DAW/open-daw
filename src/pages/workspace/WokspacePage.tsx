import React from 'react';
import ReactTooltip from 'react-tooltip'
import AppWindow from '../../components/Window/Window';
import CRPatternKey from '../../components/DAW/ChannelRack/CRPatternKey';
import ActiveIndicator from '../../components/DAW/ChannelRack/ActiveIndicator';
import Checkbox from '../../components/Forms/Checkbox';
import Slider from '../../components/Forms/Slider';
import Potentiometer from '../../components/Forms/Potentiometer';
import NumberSelect from '../../components/Forms/NumberSelect';
import RackButton from '../../components/DAW/UI/RackButton';
import ChannelRackItem from '../../components/DAW/ChannelRack/ChannelRackItem';
import ChannelRack from '../../components/Windows/ChannelRack/ChannelRack';
import Knob from '../../components/Forms/Knob';

interface IRecipeState {
    openDialog: boolean;
    active: boolean;
    sliderValue: number;
    grid?: number[] | any;
}
export default class WorkspacePage extends React.Component<{ showScale: boolean }, IRecipeState> {
    constructor(props: any) {
        super(props);

        this.state = {
            active: false,
            grid: [50, 50],
            openDialog: false,
            sliderValue: 30
        }
    }

    static defaultProps = {
        showScale: false
    }

    render() {
        return (
            <div style={{ height: '100vh' }}>
                <AppWindow grid={this.state.grid} style={{ width: '600px', height: '150px' }} title="UI Components">
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <CRPatternKey></CRPatternKey>
                        <CRPatternKey active></CRPatternKey>
                        <CRPatternKey color="red"></CRPatternKey>
                        <CRPatternKey active color="red"></CRPatternKey>

                        <ActiveIndicator></ActiveIndicator>
                        <ActiveIndicator active={true}></ActiveIndicator>

                        <Checkbox />
                        <Checkbox active={this.state.active} onChange={(active: any) => this.setState({ active })} />
                        <RackButton />
                        <NumberSelect
                            min={2}
                            max={200}
                            step={1}
                            value={2}
                            onChange={(val) => this.setState({ grid: [val, val] })} />
                        <ChannelRackItem octaves={1} />

                        <RackButton
                            label="Open Modal"
                            onClick={() => this.setState({ openDialog: !this.state.openDialog })}
                        />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* <Dialog
                open={this.state.openDialog}
                onClose={() => this.setState({ openDialog: false })}
              /> */}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Slider showLabel value={10} />
                        </div>
                    </div>
                    <Potentiometer value={10} />
                    <Knob value={10} />
                </AppWindow>
                <ChannelRack />

                <ReactTooltip />

                <Knob
                    size={50}
                    onChange={(value) => console.log(value)}
                />
            </div>
        );
    }
}
