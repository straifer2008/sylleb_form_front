import React from 'react';
import {compose, lifecycle} from 'recompose';
import Modal from 'react-modal';
import './styles.scss'

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        padding               : 0,
    }
};


const ForgotPasswordModal = ({modalIsOpen, afterOpenModal, closeModal}) => (
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
    >
        <div className='modal'>
            <span onClick={closeModal} className='modal_close'>X</span>
            <div className='modal_content'>
                <div>I am a modal</div>
            </div>
        </div>
    </Modal>
);

const enhance = compose(
    lifecycle({
        componentDidMount() {
            Modal.setAppElement('body');
        }
    })
);
export default enhance(ForgotPasswordModal);
