import { zoomIn, scaleIn } from 'react-animations';
import Radium from 'radium';

export default {
    scale: {
        in: {
            animation: 'x .35s',
            animationName: Radium.keyframes(scaleIn, 'slideInUp')
        }
    },
    page: {
        in: {
            animation: 'x .35s',
            animationName: Radium.keyframes(zoomIn, 'slideInUp')
        }
    }
}
