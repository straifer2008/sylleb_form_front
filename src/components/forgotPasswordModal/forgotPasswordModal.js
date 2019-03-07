import React from 'react';
import {compose, lifecycle, withHandlers} from 'recompose';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import ForgotPasswordForm from './forgotPasswordForm/forgotPasswordForm';
import './styles.scss'

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.55)'
    },
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


const ForgotPasswordModal = ({
                                 modalIsOpen, afterOpenModal,
                                 closeModal, forgotPassword
}) => (
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
    >
        <div className='modal'>
            <span onClick={closeModal} className='modal_close'>X</span>
            <div className='modal_content'>
                <ForgotPasswordForm
                    forgotPassword={forgotPassword}
                    closeModal={closeModal}
                />
            </div>
        </div>
    </Modal>
);

ForgotPasswordModal.propTypes = {
    modalIsOpen: PropTypes.bool,
    afterOpenModal: PropTypes.func,
    closeModal: PropTypes.func,
    forgotPassword: PropTypes.func
};

const enhance = compose(
    withHandlers({
        closeModalAfterSubmit: props => event => {

        }
    }),
    lifecycle({
        componentDidMount() {
            Modal.setAppElement('body');
        }
    })
);
export default enhance(ForgotPasswordModal);
