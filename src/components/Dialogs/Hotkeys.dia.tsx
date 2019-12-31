import React from 'react';
import Dialog from '../base/Dialog';
import Subtitle from '../Text/Subtitle';
import { hasOnClose } from '../base/interfaces/component-props';
import { KeyMapDescriptions, KeyMap } from '../../config/hotkeys';
import Title from '../Text/Title';

import {
    osName
} from "react-device-detect";
interface IRecipeProps extends hasOnClose {
    isOpen?: boolean;
    contentLabel?: string;
}
export default class HotkeyDialog extends React.Component<IRecipeProps, { sections: any[] }> {
    static defaultProps = {
        isOpen: false,
    }

    constructor(props) {
        super(props);
        const sections: any[] = [];

        for (let key in KeyMap) {
            sections.push({ name: key, keys: KeyMap[key] })
        }

        this.state = {
            sections: sections
        }
    }

    render() {


        console.log(osName);
        return (
            <Dialog
                style={{ top: '20%' }}
                isOpen={this.props.isOpen}
                onClose={this.props.onClose}>
                <div style={{ width: 'auto', minWidth: '150px' }}>
                    <Title text="Hot Keys" />
                    {this.state.sections.map(section => {
                        return (
                            <div className="list" style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
                                <Subtitle className="upper" text={section.name} />
                                {Object.keys(section.keys).map(key => {
                                    let hotkey = section.keys[key];
                                    let desc = KeyMapDescriptions[key];
                                    return (
                                        <div className="list-item space-between col-gray-light">
                                            <strong className="text-small">{desc}</strong>
                                            <code>{hotkey}</code>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </Dialog>
        )
    }
}