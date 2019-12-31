
import {
    osName
} from "react-device-detect";

console.log(osName);

export const KeyMap = {
    app: {
        TOGGLE_HOTKEY_WINDOW: osName === 'Mac OS' ? "command+shift+x" : "control+shift+x",
        SWITCH_WINDOW: osName === 'Mac OS' ? "command+tab" : "control+tab",
    },
    ChannelRack: {
        TOOL_PEN: osName === 'Mac OS' ? "command+shift+p" : "control+shift+p",
    },
};

export const KeyMapDescriptions = {
    TOGGLE_HOTKEY_WINDOW: 'Show/hide hotkey dialog',
    SWITCH_WINDOW: 'Switch between active windows',

    TOOL_PEN: 'Select the pen tool'
};