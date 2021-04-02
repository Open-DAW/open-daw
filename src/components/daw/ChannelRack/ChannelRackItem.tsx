import React from 'react';
import Checkbox from '../../Forms/Checkbox';
import RackButton from '../UI/RackButton';
import NumberSelect from '../../Forms/NumberSelect';
import ActiveIndicator from './ActiveIndicator';
import CRPatternKey from './CRPatternKey';
import Knob from '../../Forms/Knob';
import { RackItem } from '../../../entities/RackItem';
import { HotKeys } from 'react-hotkeys';
import { KeyMap, wrapHotKey } from '../../../config/hotkeys';
import ComponentBase from '../../base/ComponentBase';
import ReactTooltip from 'react-tooltip';

interface IRecipeProps {
  octaves: number;
  name: string;
  item?: RackItem;
}
interface IRecipeState {
  active?: boolean;
  octaves: number;
  gain: number;
  pan: number;
  patternMap: string[];
}
export default class ChannelRackItem extends ComponentBase<IRecipeProps, IRecipeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      active: false,
      octaves: this.props.octaves,
      gain: 100,
      pan: 50,
      patternMap: [],
    };
  }

  static defaultProps = {
    octaves: 2,
    name: 'Test',
  };

  public handlers = {
    PREVIEW: wrapHotKey(this.previewPattern.bind(this)),
  };

  public ref: HTMLDivElement | null = null;

  componentDidMount() {
    let patternMap = Array(this.props.octaves * 8)
      .fill(0)
      .map(() => '');
    this.setState({ patternMap });
  }

  setPatternActive(active, index) {
    let patternMap = this.state.patternMap;
    patternMap[index] = active ? 'C5' : '';
    this.setState({ patternMap });
    console.log(patternMap);
  }

  renderPatternKeys() {
    let octaves: any[] = [];
    for (let i = 0; i < this.props.octaves; i++) {
      octaves.push(
        <div key={i} className="octave">
          {Array(4)
            .fill(0)
            .map((el, ie) => (
              <CRPatternKey key={i + '' + ie} onClick={(active) => this.setPatternActive(active, i)} />
            ))}
          {Array(4)
            .fill(0)
            .map((el, ie) => (
              <CRPatternKey key={i + '' + ie} onClick={(active) => this.setPatternActive(active, i + 4)} color="red" />
            ))}
          {Array(4)
            .fill(0)
            .map((el, ie) => (
              <CRPatternKey key={i + '' + ie} onClick={(active) => this.setPatternActive(active, i + 8)} />
            ))}
          {Array(4)
            .fill(0)
            .map((el, ie) => (
              <CRPatternKey key={i + '' + ie} onClick={(active) => this.setPatternActive(active, i + 12)} color="red" />
            ))}
        </div>,
      );
    }
    return octaves;
  }

  previewPattern(evt) {
    this.props.item && this.props.item.play('C4');
  }

  runSequence() {
    this.props.item?.sequence(this.state.patternMap);
  }

  stopSequence() {
    this.props.item?.stopSequence();
  }

  onFocus = () => {
    ReactTooltip.show(this.ref);
    this.setState({ active: true });
  };

  onBlur = () => {
    ReactTooltip.hide(this.ref);
    this.setState({ active: false });
  };

  render() {
    return (
      <HotKeys keyMap={KeyMap.ChannelRack} handlers={this.handlers}>
        <div
          tabIndex={-1}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          key={this.props.name}
          ref={(ref) => (this.ref = ref)}
          data-tip={this.props.name}
          data-effect="solid"
          data-place="bottom"
          className="channel-rack-item"
        >
          <Checkbox disabled active={this.state.active} onChange={(active) => this.setState({ active })} />
          <Knob value={this.state.pan} />
          <Knob value={this.state.gain} />
          <NumberSelect />
          <RackButton onClick={this.previewPattern.bind(this)} label={this.props.name} style={{ marginRight: 0 }} />
          <ActiveIndicator active={this.state.active} />
          {this.renderPatternKeys()}
        </div>
      </HotKeys>
    );
  }
}
