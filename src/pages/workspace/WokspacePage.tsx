import React from 'react';
import AppHeader from '../../components/Layout/AppHeader';
import AppFooter from '../../components/Layout/AppFooter';

interface IRecipeState {
    openDialog: boolean;
    active: boolean;
    sliderValue: number;
    grid?: number[] | any;
}
export default class WorkspacePage extends React.Component<{ showScale: boolean }, IRecipeState> {
    constructor(props: any) {
        super(props);

        this.state = {
            active: false,
            grid: [50, 50],
            openDialog: false,
            sliderValue: 30
        }
    }

    static defaultProps = {
        showScale: false
    }

    render() {
        return (
            <div style={{ height: '100vh' }}>
                <AppHeader />
                <div>

                </div>
                <AppFooter />
            </div>
        );
    }
}
