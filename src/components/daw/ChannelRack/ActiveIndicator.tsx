import React from 'react';

interface IRecipeProps {
    active?: boolean;
}
export default class ActiveIndicator extends React.Component<IRecipeProps> {
    static defaultProps = {
        active: false
    }

    render() {
        return (
            <div className={
                this.props.active ? 'active-indicator active' : 'active-indicator'
            }></div>
        )
    }
}