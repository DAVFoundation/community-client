import {connect} from 'react-redux';
import Bounties from '../presentationals/Bounties.jsx';
import {openModal} from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  openModal: (obj) => dispatch(openModal(obj)),
});

const mapStateToProps = (state) => ({
  bountyList: state.bounties.bountyList,
  hasStation: state.user.hasStation
});

export default connect(mapStateToProps, mapDispatchToProps)(Bounties);
