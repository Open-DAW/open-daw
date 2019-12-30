import React from 'react';
import { hasOnChange, hasStyle } from '../base/interfaces/component-props';
import { Coords } from '../base/interfaces/coordenates';
import MonoText from '../Text/Mono';
import { constrain } from '../../utils/utils';
import './styles/Slider.scss';


interface IRecipeProps extends hasOnChange, hasStyle {
    value: number;
    disabled: boolean;
    showLabel: boolean;
    minX: number;
    maxX: number;

}
export default class Slider extends React.Component<IRecipeProps, Coords> {
    static defaultProps: IRecipeProps = {
        disabled: false,
        minX: 0,
        maxX: 100,
        showLabel: false,
        value: 0,
    }

    public state = {
        x: 0,
        y: 0,
    }

    constructor(props: any) {
        super(props);
        this.state = {
            x: this.props.value,
            y: 0,
        }
    }

    dragged = (pos) => {
        this.setState({ x: pos.x, y: pos.y });
        if (this.props.onChange) {
            this.props.onChange(pos.x);
        }
    }

    clickedSlider = (event) => {
        let relClickX = event.clientX - event.currentTarget.offsetLeft;
        let relClickXClean = Math.floor(constrain(relClickX));
        this.setState({ x: relClickXClean });
        this.props.onChange && this.props.onChange(relClickXClean);
    }

    render() {
        return (
            <div
                style={this.props.style}
                className={["slider", this.props.disabled ? 'disabled' : ''].join(' ')}
                tabIndex={-1}
                onClick={this.clickedSlider}>
                {/* <DragDetector
                    minX={this.props.minX}
                    maxX={this.props.maxX}
                    pos={this.state}
                    axis="x"
                    onChange={this.dragged}
                    className="slider-rail">
                    <div className="slider-rail-traveled" style={{ width: this.state.x + 'px' }}></div>
                    <div className="slider-indicator-circle" style={{ left: this.state.x + 'px' }}></div>
                </DragDetector> */}
                <div
                    onChange={this.dragged}
                    className="slider-rail">
                    <div className="slider-rail-traveled" style={{ width: this.state.x + 'px' }}></div>
                    <div className="slider-indicator-circle" style={{ left: this.state.x + 'px' }}></div>
                </div>


                {this.props.showLabel &&
                    <MonoText>{this.state.x}</MonoText>
                }
            </div>
        )
    }
}