import React from 'react';
import LogoSvg from '../../assets/icons/Logo.svg';

export default class Logo extends React.Component<{ size: number }>{
    static defaultProps = {
        size: 40
    }

    render() {
        return (
            <img src={LogoSvg} alt="" style={{ width: this.props.size, height: this.props.size }} />
        )
    }
}