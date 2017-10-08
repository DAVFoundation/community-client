import {connect} from 'react-redux';
import {openModal, closeModal} from '../../actions';
import Modal from '../presentationals/Modal.jsx';

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  openModal: (obj) => dispatch(openModal(obj))
});

const mapStateToProps = (state) => ({
  isOpen: state.modals.isOpen,
  modalType: state.modals.modalType,
  modalProps: state.modals.modalProps
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
