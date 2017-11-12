import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {submitUpdateForm} from '../../actions';
import UpdateForm, {validate} from '../presentationals/UpdateForm.jsx';

const mapStateToProps = (state) => ({
  success: state.forms.success,
  error: state.forms.error,
  form: state.form,
  permissions: state.user.permissions
});

const mapDispatchToProps = (dispatch) => ({
  submitUpdateForm: (obj) => dispatch(submitUpdateForm(obj))
});

const Comp = connect(mapStateToProps, mapDispatchToProps)(UpdateForm);

export default reduxForm({
  form: 'update-form',
  validate
})(Comp);
