import {connect} from 'react-redux';
import Bounties from '../presentationals/Bounties.jsx';

const mapStateToProps = (state) => ({
  bountyList: state.bounties.bountyList
});

export default connect(mapStateToProps)(Bounties);
