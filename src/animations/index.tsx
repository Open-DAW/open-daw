import { fadeIn, fadeOut } from 'react-animations';
import Radium from 'radium';

export default {
    fadeIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    },
    fadeOut: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeOut, 'fadeOut')
    }
}
