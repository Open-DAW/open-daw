import React from 'react';
import { hasOnChange } from '../base/interfaces/component-props';
import DragDetector from '../base/DragDetector';
import { Coords } from '../base/interfaces/coordenates';
import { numberFixed } from '../../utils/utils';
import './styles/Potentiometer.scss';

interface IRecipeProps extends hasOnChange {
    value?: number;
    min: 0,
    max: 100,
}
interface IRecipeState {
    stroke: string;
    pos: Coords;
}
export default class Potentiometer extends React.Component<IRecipeProps, IRecipeState> {
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
            stroke: '0, 100'
        }
    }

    componentDidMount() {
        this.setValue(this.props.value);
    }

    setValue(number) {
        let fixedNumber = numberFixed(number, this.props.max);
        let stroke = (this.props.max - fixedNumber) + ' ' + this.props.max;
        this.setState({ stroke });
    }

    dragged = (pos) => {
        this.setValue(pos.y);
        this.setState({ pos: { x: pos.x, y: pos.y } })
    }

    render() {
        return (
            <div className="potentiometer center">
                <DragDetector
                    pos={this.state.pos}
                    axis="y"
                    onChange={this.dragged} className="wrapper center">
                    <div className="center-circle center">
                        <div className="center-circle-small"></div>
                    </div>
                    <div className="indicator-svg">
                        <svg className="svg" width="30" height="30" >
                            <circle r="15" cx="15" cy="15" style={{ strokeDasharray: this.state.stroke }} />
                        </svg>
                    </div>
                </DragDetector>
            </div>
        )
    }
}