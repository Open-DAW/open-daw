import React from 'react';
import FloatingWindow from './FloatingWindow';
import WindowHeader from './WindowHeader';
import WindowFooter from './WindowFooter';
import WindowContent from './WindowContent';
import './Window.scss';
import { hasStyle } from '../base/interfaces/component-props';

interface IRecipeProps extends hasStyle {
    headerActive?: boolean;
    footerActive?: boolean;
    title?: string;
    active?: boolean;
    collapsed?: boolean;
}

interface IRecipeState {
    active: boolean;
    collapsed: boolean;
}
export default class Window extends React.Component<IRecipeProps, IRecipeState> {
    static defaultProps = {
        headerActive: true,
        footerActive: false,
        title: 'Window',
        style: {}
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
            <FloatingWindow style={this.props.style}>
                {this.props.headerActive &&
                    <WindowHeader onAction={this.onAction} title={this.props.title} active={this.state.active}></WindowHeader>
                }
                {this.props.children &&
                    <WindowContent collapsed={this.state.collapsed}>{this.props.children}</WindowContent>
                }
                {this.props.footerActive &&
                    <WindowFooter></WindowFooter>
                }
            </FloatingWindow>
        );
    }
}