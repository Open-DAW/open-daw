
import React from 'react';
import Modal from 'react-modal';
import { hasOnClose, hasStyle } from './interfaces/component-props';
import { StyleRoot } from 'radium';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};
Modal.setAppElement('#root');

interface IRecipeProps extends hasOnClose, hasStyle {
    isOpen?: boolean;
    contentLabel?: string;
    afterOpenModal?: (...args: any[]) => any
}
export default class Dialog extends React.Component<IRecipeProps> {
    render() {
        return (
            <StyleRoot>
                <Modal
                    style={{ ...customStyles, ...this.props.style }}
                    isOpen={this.props.isOpen}
                    onAfterOpen={this.props.afterOpenModal}
                    onRequestClose={this.props.onClose}
                    contentLabel={this.props.contentLabel}
                    shouldCloseOnOverlayClick={true}
                >
                    {this.props.children}
                </Modal>
            </StyleRoot>
        );
    }
}