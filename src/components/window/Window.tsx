import React from 'react';
import FloatingWindow from './FloatingWindow';
import WindowHeader from './WindowHeader';
import WindowFooter from './WindowFooter';
import WindowContent from './WindowContent';
import './Window.scss';
import { hasStyle, hasClassName } from '../base/interfaces/component-props';
import { Resizable } from 're-resizable';

interface IRecipeProps extends hasStyle, hasClassName {
    headerActive?: boolean;
    footerActive?: boolean;
    title?: string;
    active?: boolean;
    collapsed?: boolean;
    grid?: number[] | any;
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
        grid: [50, 50]
    }

    constructor(props: any) {
        super(props);
        this.state = {
            active: false,
            collapsed: false,
        };
    }

    onClick = () => {
        this.setState({ active: !this.state.active });
    }

    onAction = (action: string) => {
        if (action === 'collapse') {
            this.setState({ collapsed: true });
        }
        if (action === 'expand') {
            this.setState({ collapsed: true });
        }
    }

    render() {
        return (
            <FloatingWindow grid={this.props.grid} style={this.props.style}>
                {this.props.headerActive &&
                    <WindowHeader onAction={this.onAction} title={this.props.title} active={this.state.active}></WindowHeader>
                }

                {this.props.children &&
                    <WindowContent className={this.props.className} collapsed={this.state.collapsed}>{this.props.children}</WindowContent>
                }

                {this.props.footerActive &&
                    <WindowFooter></WindowFooter>
                }
            </FloatingWindow>
        );
    }
}