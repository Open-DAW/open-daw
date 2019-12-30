import React from 'react';
import MaterialIcon from '@material/react-material-icon';
import './styles/NumberSelect.scss';

interface IRecipeProps {
    value: number;
    min: number;
    max: number;
    step: number;
    onChange?: (value: number) => any;
}
interface IRecipeState {
    value: number;
}
export default class NumberSelect extends React.Component<IRecipeProps, IRecipeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: this.props.value || 0,
        };
    }

    static defaultProps = {
        value: 0,
        min: -Infinity,
        max: Infinity,
        step: 3,
    };

    handleChange = (event: any) => {
        let newValue = Number(event.target.value);
        console.log(event);

        if (
            isNaN(newValue)
        ) {
            newValue = this.state.value;
        }

        if (
            (newValue < this.props.min || newValue > this.props.max)
        ) {
            return event.preventDefault && event.preventDefault();
        }

        this.setState({ value: newValue });
        if (this.props.onChange) {
            this.props.onChange(newValue);
        }
    }

    add = (incr: number) => {
        let value = this.state.value;
        if (value < this.props.min || value > this.props.max) {
            return;
        }
        this.handleChange({ target: { value: (this.state.value + (incr * (this.props.step || 1))) } })
    }

    increase = () => this.add(1);
    decrease = () => this.add(-1);

    render() {
        return (
            <div className="number-select">
                <div className="number-select-content">
                    <input type="text"
                        value={this.state.value}
                        onChange={this.handleChange} />
                </div>
                <div className="number-select-icons">
                    <div className="icon-btn"
                        onClick={this.increase}>
                        <MaterialIcon icon="arrow_drop_up" />
                    </div>
                    <div className="icon-btn"
                        onClick={this.decrease}>
                        <MaterialIcon icon="arrow_drop_down" />
                    </div>
                </div>
            </div>
        )
    }
}