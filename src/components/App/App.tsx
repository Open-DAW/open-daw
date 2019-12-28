import React from 'react';
import './App.scss';
import '../forms/Forms.scss';

import Window from '../window/Window';
import CRPatternKey from '../daw/ChannelRack/CRPatternKey';
import ActiveIndicator from '../daw/ChannelRack/ActiveIndicator';
import Checkbox from '../forms/Checkbox';
import NumberSelect from '../forms/NumberSelect';
import RackButton from '../daw/UI/RackButton';
import ChannelRack from '../daw/ChannelRack/ChannelRack';
import FloatingWindow from '../window/FloatingWindow';
import MonoText from '../text/Mono';

export default class App extends React.Component<{}, { active: boolean }> {
  constructor(props: any) {
    super(props);

    this.state = {
      active: false
    }
  }


  render() {
    return (
      <div >
        <Window style={{ width: '600px', height: '300px' }} title="UI Components">
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
              min={0}
              max={11}
              value={0}
              onChange={(val) => { console.log('changed: ', val); }} />
          </div>
        </Window>

        <Window style={{ width: '600px', height: '300px' }} title="UI Components">
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <MonoText >Compound Components</MonoText>
            <ChannelRack />
          </div>
        </Window>
      </div>
    );
  }
}
