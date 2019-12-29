import React from 'react';
import { hasOnChange } from '../base/interfaces/component-props';
import DragDetector from '../base/DragDetector';
import { Coords } from '../base/interfaces/coordenates';
import { numberFixed } from '../../utils/utils';

import './styles/Knob.scss';

interface IRecipeProps extends hasOnChange {
    value?: number;
    min: 0,
    max: 100,
}
interface IRecipeState {
    stroke: string;
    pos: Coords;
    rotation: string;
}
export default class Knob extends React.Component<IRecipeProps, IRecipeState> {
    static defaultProps = {
        min: 0,
        max: 100,
        value: 0,
    }

    constructor(props: any) {
        super(props);
        this.state = {
            pos: {
                x: 0,
                y: 0,
            },
            stroke: '0, 100',
            rotation: '180deg'
        }
    }

    componentDidMount() {
        this.setValue(this.props.value);
    }

    setValue(number) {
        let fixedNumber = (numberFixed(number, 360) - 180) + 'deg';
        this.setState({ rotation: fixedNumber });
    }

    dragged = (pos) => {
        this.setValue(-pos.y);
        this.setState({ pos: { x: pos.x, y: -pos.y } })
    }

    render() {
        return (
            <div className="wrapper" >
                <DragDetector
                    style={{ rotate: this.state.rotation }}
                    pos={this.state.pos}
                    axis="y"
                    onChange={this.dragged} className={["knob center"].join(' ')}>
                    <div className="indicator"></div>
                </DragDetector>
            </div >
        )
    }
}