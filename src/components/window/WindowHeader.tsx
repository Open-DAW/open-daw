import React from 'react';
import MaterialIcon from '@material/react-material-icon';

interface IRecipeProps {
    title: string;
    active?: boolean;
    onAction: (...args: any[]) => any;
}

export default class WindowHeader extends React.Component<IRecipeProps> {
    static defaultProps = {
        title: 'Window',
        active: false,
        onAction() { }
    }

    render() {
        return (
            <div className={
                this.props.active ? 'window-header active' : 'window-header'
            }>
                <div className="window-header-title">
                    {this.props.title}
                </div>
                <div className="window-header-controls">
                    <button className="window-header-control" onClick={() => {
                        this.props.onAction(this.props.active ? 'collapse' : 'expand')
                    }}>
                        <MaterialIcon icon="expand_more"></MaterialIcon>
                    </button>
                    <button className="window-header-control" onClick={() => this.props.onAction('close')}>
                        <MaterialIcon icon="close"></MaterialIcon>
                    </button>
                </div>
            </div>
        );
    }
}