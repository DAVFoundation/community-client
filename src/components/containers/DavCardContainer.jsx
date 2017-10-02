import {connect} from 'react-redux';
import DavCard from '../presentationals/DavCard.jsx';

const mapStateToProps = (state) => ({
  uid: state.card.uid,
  balance: state.card.balance,
  name: state.card.name
});

export default connect(mapStateToProps)(DavCard);
