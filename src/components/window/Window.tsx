import React from 'react';
import './Window.scss';
import { hasStyle, hasClassName } from '../base/interfaces/component-props';
import FloatingWindow from './FloatingWindow';
import WindowHeader from './WindowHeader';
import WindowContent from './WindowContent';
import WindowFooter from './WindowFooter';

interface IRecipeProps extends hasStyle, hasClassName {
  headerActive?: boolean;
  footerActive?: boolean;
  title?: string;
  width: number | string;
  height: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  maxWidth?: number | string;
  maxHeight?: number | string;
  x: number;
  y: number;
  dragGrid: [number, number];
  dragAxis: 'x' | 'y' | 'both' | 'none';
}

interface IRecipeState {
  active: boolean;
  collapsed: boolean;
}
export default class AppWindow extends React.Component<IRecipeProps, IRecipeState> {
  static defaultProps = {
    headerActive: true,
    footerActive: false,
    title: 'Window',
    style: {},
    width: 500,
    height: 300,
    x: 0,
    y: 0,
    dragGrid: [50, 50],
    resizeGrid: [1, 1],
    dragAxis: 'both',
  };

  render() {
    return (
      <FloatingWindow dragHandleClassName="window-header" {...this.props} style={this.props.style}>
        {this.props.headerActive && <WindowHeader title={this.props.title}></WindowHeader>}

        {this.props.children && <WindowContent className={this.props.className}>{this.props.children}</WindowContent>}

        {this.props.footerActive && <WindowFooter></WindowFooter>}
      </FloatingWindow>
    );
  }
}
