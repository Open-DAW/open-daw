import React from 'react';

export default class WindowFooter extends React.Component {
    render() {
        return (
            <div className="window-footer">
                {this.props.children}
            </div>
        );
    }
}