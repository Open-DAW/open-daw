import React from 'react';
import MaterialIcon from '@material/react-material-icon';

interface IRecipeProps {
    onAdd: (...args: any[]) => any
}
export default class ChannelRackFooter extends React.Component<IRecipeProps> {
    static defaultProps = {}

    render() {
        return (
            <div className="channel-rack-footer">
                <button className="footer-header-control" onClick={this.props.onAdd}>
                    <MaterialIcon icon="add"></MaterialIcon>
                </button>
            </div>
        )
    }
}