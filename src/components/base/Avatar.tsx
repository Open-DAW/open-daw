import React from 'react';
import { hasStyle } from './interfaces/component-props';

import './Avatar.scss';

interface IRecipeProps extends hasStyle {
    src: string;
}
export default class Avatar extends React.Component<IRecipeProps>{
    static defaultProps = {
        style: {
           
        }
    }

    render() {
        return (
            <img className="avatar" src={this.props.src} style={this.props.style} />
        )
    }
}