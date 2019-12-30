import React from 'react';
import { hasStyle, hasClassName } from './interfaces/component-props';
import { Coords } from './interfaces/coordenates';

interface IRecipeProps extends hasStyle, hasClassName {
    onChange?: (pos: Coords) => any;
    axis?: 'x' | 'y' | 'xy';
    pos: Coords;
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
}
export default class DragDetector extends React.Component<IRecipeProps, Coords> {
    static defaultProps = {
        axis: 'xy',
        pos: { x: 0, y: 0 },
        minX: 0,
        maxX: 100,
        minY: 0,
        maxY: 100,
    }

    public state = {
        x: 0,
        y: 0
    }

    public dragImg: HTMLImageElement = new Image(0, 0);

    hasAxisMovement(axis) {
        return this.props.axis?.includes(axis);
    }

    dragStart = (event) => {
        event.dataTransfer.setDragImage(this.dragImg, 0, 0);
        // let pos = this.props.pos;
        return false;
    }

    drag = (event) => {
        console.log({ ...event })

        let offsetX = event.currentTarget.parentNode.offsetLeft;
        let offsetY = event.currentTarget.parentNode.offsetTop;
        let newX = event.clientX - offsetX;
        let newY = event.clientY - offsetY;
        console.log({ clientX: event.clientX, offsetX })

        if (newX < this.props.minX || newX > this.props.maxX) return;
        if (newY < this.props.minY || newY > this.props.maxY) return;
        console.log('ahjiosd')

        let newPos = {
            x: newX - this.state.x,
            y: newY - this.state.y,
        }
        this.props.onChange && this.props.onChange(newPos);
        return false;
    }

    componentDidMount() {
        this.dragImg.style.display = 'none';
        this.dragImg.src =
            'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    }

    render() {
        return (
            <div
                draggable
                className={this.props.className}
                tabIndex={-1}
                style={this.props.style}
                onDragStart={this.dragStart}
                onDrag={this.drag}
            >
                {this.props.children}
            </div>
        )
    }
}