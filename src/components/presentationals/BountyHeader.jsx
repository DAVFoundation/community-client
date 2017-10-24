import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListItem} from './Common.jsx';

class BountyHeader extends Component {
  constructor(props){
    super(props);
    this.performParentAction = this.performParentAction.bind(this);

    this.state = {activeItem:this.props.selectedTab};

  }

  performParentAction(tab){
    if(this.props.setLocalState){
      this.setState({activeItem:tab});
    }
    this.props.trigger(tab);
  }

  render(){

    var bountyList = this.props.info.map((bounty, index) => {
      return (<ListItem key={index} active={this.state.activeItem == bounty.tag} completed={this.props.hasStation[bounty.tag]} index={index} title={bounty.title} icon={bounty.icon} tag={bounty.tag} action={this.performParentAction} />);
    });

    return(
      <div>
        <ul id="bounty-list" className="list-inline">{bountyList}</ul>
      </div>
    );
  }
}

BountyHeader.propTypes = {
  trigger: PropTypes.func,
  info: PropTypes.array,
  selectedTab: PropTypes.string,
  setLocalState: PropTypes.bool,
  hasStation: PropTypes.object
};

export default BountyHeader;
