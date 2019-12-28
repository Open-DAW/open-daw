import React from 'react';
import Checkbox from '../../forms/Checkbox';
import RackButton from '../UI/RackButton';
import NumberSelect from '../../forms/NumberSelect';
import ActiveIndicator from './ActiveIndicator';
import CRPatternKey from './CRPatternKey';

interface IRecipeProps {

}
interface IRecipeState {
    active?: boolean;
}
export default class ChannelRack extends React.Component<IRecipeProps, IRecipeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            active: false
        }
    }

    onFocus = () => {
        this.setState({ active: true });
    }

    onBlur = () => {
        this.setState({ active: false });
    }

    render() {
        return (
            <div className="channel-rack" tabIndex={-1} onFocus={this.onFocus} onBlur={this.onBlur}>
                <Checkbox disabled active={this.state.active} onChange={(active) => this.setState({ active })} />
                <NumberSelect />
                <RackButton style={{ marginRight: 0 }} />
                <ActiveIndicator active={this.state.active} />
                <CRPatternKey></CRPatternKey>
                <CRPatternKey></CRPatternKey>
                <CRPatternKey></CRPatternKey>
                <CRPatternKey></CRPatternKey>
                <CRPatternKey color="red"></CRPatternKey>
                <CRPatternKey color="red"></CRPatternKey>
                <CRPatternKey color="red"></CRPatternKey>
                <CRPatternKey color="red"></CRPatternKey>
                <CRPatternKey></CRPatternKey>
                <CRPatternKey></CRPatternKey>
                <CRPatternKey></CRPatternKey>
                <CRPatternKey></CRPatternKey>
                <CRPatternKey color="red"></CRPatternKey>
                <CRPatternKey color="red"></CRPatternKey>
                <CRPatternKey color="red"></CRPatternKey>
                <CRPatternKey color="red"></CRPatternKey>
            </div>
        )
    }
}