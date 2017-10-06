import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import Form from '../presentationals/Form.jsx';
import {addBadge} from '../../actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  addBadge: (val) => dispatch(addBadge(val))
});

const Comp = connect(mapStateToProps, mapDispatchToProps)(Form);

export default reduxForm({
  form: 'station-form' //unique form name
})(Comp);
