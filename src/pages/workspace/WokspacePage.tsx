import React from 'react';
import AppHeader from '../../components/Layout/AppHeader';
import AppFooter from '../../components/Layout/AppFooter';
import { HotKeys } from "react-hotkeys";
import { KeyMap } from '../../config/hotkeys';
import HotkeyDialog from '../../components/Dialogs/Hotkeys.dia';
import Sidebar from "react-sidebar";

interface IRecipeState {
    showHotKeys: boolean;
    sidebarOpen: boolean;
}
export default class WorkspacePage extends React.Component<{ showScale: boolean }, IRecipeState> {
    constructor(props: any) {
        super(props);

        this.state = {
            showHotKeys: false,
            sidebarOpen: false
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

    onSetSidebarOpen = (open = true) => {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <HotKeys keyMap={KeyMap.app} handlers={this.handlers}>
                <Sidebar
                    sidebar={<b>Sidebar content</b>}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: {} }}
                >
                    <div style={{ height: '100vh' }}>
                        <AppHeader onClickMenu={this.onSetSidebarOpen} />
                        {/* <button onClick={() => this.onSetSidebarOpen(true)}>
                            Open sidebar
                        </button> */}
                        <AppFooter />
                    </div>

                    <HotkeyDialog
                        onClose={() => this.setState({
                            showHotKeys: false
                        })}
                        isOpen={this.state.showHotKeys} />
                </Sidebar>
            </HotKeys>
        );
    }
}
