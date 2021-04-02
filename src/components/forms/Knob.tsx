import React from 'react';
import { hasOnChange } from '../base/interfaces/component-props';
import * as rc from 'rc-knob';

import './styles/Knob.scss';

interface IRecipeProps extends hasOnChange {
  value: number;
  min: number;
  max: number;
  steps: number;
  size: number;
  angleOffset: number;
  angleRange: number;
}
export default class Knob extends React.Component<IRecipeProps> {
  static defaultProps = {
    min: 0,
    max: 100,
    value: 0,
    size: 35,
    steps: 20,
    angleRange: 280,
    angleOffset: 220,
    onChange: () => {},
  };

  render() {
    return (
      <rc.Knob
        size={this.props.size}
        value={this.props.value}
        angleOffset={this.props.angleOffset}
        angleRange={this.props.angleRange}
        min={this.props.min}
        max={this.props.max}
        snap={true}
        className="styledKnob"
        onChange={this.props.onChange}
      >
        <circle r={this.props.size / 2.5} cx={this.props.size / 2} cy={this.props.size / 2} className="knob-circle" />
        <rc.Pointer width={4} height={8} radius={8} type="rect" className="fill-accent" />
      </rc.Knob>
    );
  }
}
