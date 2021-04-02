import React from 'react';
import { Rnd } from 'react-rnd';
import './FloatingWindow.scss';
import { hasStyle, hasClassName } from '../base/interfaces/component-props';

interface IRecipeProps extends hasStyle, hasClassName {
  grid?: number[] | any;
  width: number | string;
  height: number | string;
  minWidth: number | string;
  minHeight: number | string;
  maxWidth: number | string;
  maxHeight: number | string;
  dragHandleClassName: string;
  x: number;
  y: number;
  dragGrid: [number, number];
  dragAxis: 'x' | 'y' | 'both' | 'none';
  resizeGrid: [number, number];
  title: string;
}
export default class FloatingWindow extends React.Component<IRecipeProps, any> {
  static defaultProps = {
    width: 500,
    height: 300,
    minWidth: 0,
    minHeight: 0,
    maxWidth: 1000,
    maxHeight: 1000,
    x: 0,
    y: 0,
    dragGrid: [1, 1],
    resizeGrid: [1, 1],
    dragAxis: 'both',
    title: 'Window',
  };

  constructor(props: any) {
    super(props);
    this.state = {
      ...FloatingWindow.defaultProps,
      ...this.props,
    };
  }

  render() {
    return (
      <Rnd
        minHeight={this.props.minHeight}
        minWidth={this.props.minWidth}
        maxHeight={this.props.maxHeight}
        maxWidth={this.props.maxWidth}
        resizeGrid={this.props.resizeGrid}
        dragGrid={this.props.dragGrid}
        dragAxis={this.props.dragAxis}
        dragHandleClassName={this.props.dragHandleClassName}
        bounds="parent"
        size={{ width: this.state.width, height: this.state.height }}
        position={{ x: this.state.x, y: this.state.y }}
        onDragStop={(e, d) => {
          this.setState({ x: d.x, y: d.y });
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          this.setState({
            width: ref.style.width,
            height: ref.style.height,
            ...position,
          });
        }}
        className={['floating-window', this.props.className].join(' ')}
        style={this.props.style}
        data-tip={this.props.title}
        data-effect="solid"
        data-place="bottom"
      >
        {this.props.children}
      </Rnd>
    );
  }
}
