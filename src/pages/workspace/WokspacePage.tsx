import React from 'react';
import AppHeader from '../../components/Layout/AppHeader';
import AppFooter from '../../components/Layout/AppFooter';
import { HotKeys } from "react-hotkeys";
import { KeyMap } from '../../config/hotkeys';
import HotkeyDialog from '../../components/Dialogs/Hotkeys.dia';

interface IRecipeState {
    showHotKeys: boolean;
}
export default class WorkspacePage extends React.Component<{ showScale: boolean }, IRecipeState> {
    constructor(props: any) {
        super(props);

        this.state = {
            showHotKeys: true,
        }
    }

    public toggleHotkeyWindow = () => {
        this.setState({
            showHotKeys: !this.state.showHotKeys
        })
    }


    public handlers = {
        TOGGLE_HOTKEY_WINDOW: this.toggleHotkeyWindow,
    };


    render() {
        return (
            <HotKeys keyMap={KeyMap.app} handlers={this.handlers}>
                <div style={{ height: '100vh' }}>
                    <AppHeader />

                    <AppFooter />
                </div>

                <HotkeyDialog
                    onClose={() => this.setState({
                        showHotKeys: false
                    })}
                    isOpen={this.state.showHotKeys} />
            </HotKeys>
        );
    }
}
