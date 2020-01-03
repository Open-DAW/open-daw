import React from 'react';
import './App.scss';

import Window from '../Window/Window';
import CRPatternKey from '../DAW/ChannelRack/CRPatternKey';
import ActiveIndicator from '../DAW/ChannelRack/ActiveIndicator';
import Checkbox from '../Forms/Checkbox';
import Slider from '../Forms/Slider';
import Potentiometer from '../Forms/Potentiometer';
import NumberSelect from '../Forms/NumberSelect';
import RackButton from '../DAW/UI/RackButton';
import ChannelRackItem from '../DAW/ChannelRack/ChannelRackItem';
import ChannelRack from '../Windows/ChannelRack/ChannelRack';
import ReactTooltip from 'react-tooltip'
import Knob from '../Forms/Knob';
import { ButtonNav } from '../Forms/Button';
import FileExplorer from '../Windows/FileExplorer/FileExplorer';

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
    // const sineWave = new Pizzicato.Sound({
    //   source: 'wave',
    //   options: {
    //     frequency: 220,
    //     volume: 0.05
    //   }
    // });

    // var delay = new Pizzicato.Effects.Delay({
    //   feedback: 0.6,
    //   time: 0.4,
    //   mix: 0.5
    // });

    // sineWave.addEffect(delay);
    // sineWave.play();
    // sineWave.stop();
  }


  render() {
    return (
      <div style={{ height: '100vh' }}>
        <ButtonNav toRoute="workspace" label="Workspace" />
        <ButtonNav toRoute="signin" label="Signin" />
        <ButtonNav toRoute="signup" label="Signup" />

        <Window width={400} title="UI Components">
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
              <Slider showLabel value={10} />
            </div>
          </div>
          <Potentiometer value={10} />
          <Knob value={10} />

          <Knob
            size={50}
            onChange={(value) => console.log(value)}
          />
        </Window>

        <ChannelRack />
        <FileExplorer />

        <ReactTooltip />
      </div>
    );
  }
}
