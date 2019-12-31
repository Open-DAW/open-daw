

import React from 'react';
import { Button } from '../Forms/Button';
import GoogleSigninImg from '../../assets/signin-google.png';
import { hasOnClick } from './interfaces/component-props';

export default class GoogleSignin extends React.Component<hasOnClick>{
    static defaultProps = {

    }

    render() {
        return (
            <Button transparent onClick={this.props.onClick}>
                <img src={GoogleSigninImg} alt="" style={{ width: '150px', height: 'auto' }} />
            </Button>
        )
    }
}