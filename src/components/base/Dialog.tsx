
import React from 'react';
import Modal from 'react-modal';
import { hasOnClose } from './interfaces/component-props';
import animations from '../../animations';
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


interface IRecipeProps extends hasOnClose {
    open?: boolean;
}
export default class Dialog extends React.Component<IRecipeProps> {
    public subtitle;
   
    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    render() {
        return (
            <StyleRoot>
                <Modal
                    style={{ ...customStyles }}
                    isOpen={this.props.open}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.props.onClose}
                    contentLabel="Example Modal"
                >
                    <h2 ref={_subtitle => (this.subtitle = _subtitle)}>Hello</h2>
                    <button onClick={this.props.onClose}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>
            </StyleRoot>
        );
    }
}