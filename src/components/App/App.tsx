import React from 'react';
import Pizzicato from 'pizzicato';

import './App.scss';

import Window from '../window/Window';
import CRPatternKey from '../daw/ChannelRack/CRPatternKey';
import ActiveIndicator from '../daw/ChannelRack/ActiveIndicator';
import Checkbox from '../forms/Checkbox';
import Slider from '../forms/Slider';
import Potentiometer from '../forms/Potentiometer';
import NumberSelect from '../forms/NumberSelect';
import RackButton from '../daw/UI/RackButton';
import ChannelRackItem from '../daw/ChannelRack/ChannelRackItem';
import ChannelRack from '../Windows/ChannelRack/ChannelRack';
import ReactTooltip from 'react-tooltip'
import Knob from '../forms/Knob';

interface IRecipeState {
  openDialog: boolean;
  active: boolean;
  sliderValue: number;
  grid?: number[] | any;
}
export default class App extends React.Component<{ showScale: boolean }, IRecipeState> {
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

  componentDidMount() {
    const sineWave = new Pizzicato.Sound({
      source: 'wave',
      options: {
        frequency: 220,
        volume: 0.05
      }
    });

    var delay = new Pizzicato.Effects.Delay({
      feedback: 0.6,
      time: 0.4,
      mix: 0.5
    });

    sineWave.addEffect(delay);
    sineWave.play();
    sineWave.stop();
  }


  render() {
    return (
      <div style={{ height: '100vh' }}>
        {/* <ResizableBox width={200} height={300} minConstraints={[200, 300]} maxConstraints={[1200, 600]}>
          <div style={{width: '100px', height: '50px', background: 'gray'}}>
            asdasd
          </div>
        </ResizableBox> */}

        <Window grid={this.state.grid} style={{ width: '600px', height: '150px' }} title="UI Components">
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
        </Window>
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
