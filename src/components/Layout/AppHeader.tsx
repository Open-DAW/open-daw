import React from 'react';
import Logo from '../base/Logo';
import { Button } from '../Forms/Button';
import Avatar from '../base/Avatar';

import './styles/AppHeader.scss';

export default class AppHeader extends React.Component {
    static defaultProps = {}

    render() {
        return (
            <div className="app-header">
                <Button transparent>
                    <Logo size={35} />
                </Button>

                <Avatar src="https://avatars2.githubusercontent.com/u/17043260?s=460&v=4" />
            </div>
        )
    }
}