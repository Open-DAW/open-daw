import React from 'react';
import './styles/Input.scss';
import { Button } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { hasOnChange } from '../base/interfaces/component-props';


interface IRecipeProps extends hasOnChange {
    label?: string;
    type?: string;
    value?: any;
    name?: string;
    placeholder?: string;
}
export class Input extends React.Component<IRecipeProps> {
    static defaultProps = {
        value: '',
        type: 'text',
        onChange(an) {

        }
    }

    render() {
        return (
            <div className="input">
                <input autoComplete="new-password"
                    placeholder={this.props.placeholder || this.props.label}
                    value={this.props.value}
                    type={this.props.type}
                    onInput={(evt) => this.props.onChange && this.props.onChange(evt.currentTarget.value)}
                />

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
