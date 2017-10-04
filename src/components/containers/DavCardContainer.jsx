import {connect} from 'react-redux';
import {getUser} from '../../actions';
import DavCard from '../presentationals/DavCard.jsx';

const mapStateToProps = (state) => ({
  uid: state.card.uid,
  balance: state.card.balance,
  name: state.card.name
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(DavCard);
