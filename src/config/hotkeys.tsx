
import {
    osName
} from "react-device-detect";

const isMac = osName === 'Mac OS';
console.log(isMac);

export const KeyMap = {
    app: {
        TOGGLE_HOTKEY_WINDOW: isMac ? "command+shift+x" : "control+shift+x",
        SWITCH_WINDOW: isMac ? "command+tab" : "control+tab",
    },
    ChannelRack: {
        PREVIEW: isMac ? "command+p" : "control+p",
    },
};

export const KeyMapDescriptions = {
    TOGGLE_HOTKEY_WINDOW: 'Show/hide hotkey dialog',
    SWITCH_WINDOW: 'Switch between active windows',

    PREVIEW: 'Preview sample/instrument'
};

export function wrapHotKey(fn: (...args: any[]) => any): any {
    return function (evt) {
        fn(evt);
        evt.preventDefault();
        return false;
    }
}