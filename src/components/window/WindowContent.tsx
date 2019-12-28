import React from 'react';

interface IRecipeProps {
    collapsed: boolean;
}
export default class WindowContent extends React.Component<IRecipeProps> {
    static defaultProps = {
        collapsed: false,
    }

    render() {
        return (
            <div className="window-content" style={
                (this.props.collapsed)
                    ? { height: '0%' }
                    : { height: '100%' }
            }>
                {this.props.children}
            </div>
        );
    }
}