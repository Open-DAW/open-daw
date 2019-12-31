import React from 'react';
import './styles/Input.scss';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import TextMutted from '../Text/Mutted';
import animations from '../../animations';

interface IRecipeProps {
    label?: string;
    type?: string;
    name: string;
    inputProps?: any;
}
export class Input extends React.Component<IRecipeProps> {
    static defaultProps = {
        label: '',
        type: 'text',
        name: 'input',
        inputProps: {}
    }

    render() {
        return (
            <div className="input">
                <input autoComplete="new-password" {...this.props.inputProps} placeholder={this.props.label} />

                <div className="right-abs center" style={{ height: '100%' }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export class InputPassword extends React.Component<{ show: boolean; label: string; inputProps?: any; }, { show: boolean }> {
    static defaultProps = {
        show: false,
    }
    public state = {
        show: false,
    }

    render() {
        return (
            <Input {...this.props} type={this.state.show ? 'text' : 'password'}>
                <Button onClick={() => {
                    this.setState({ show: !this.state.show })
                }}>
                    {!this.state.show && <FontAwesomeIcon icon={faEye} />}
                    {this.state.show && <FontAwesomeIcon icon={faEyeSlash} />}
                </Button>
            </Input>
        );
    }
}
