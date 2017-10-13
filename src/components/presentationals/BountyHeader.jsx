import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListItem} from './Common.jsx';

class BountyHeader extends Component {
  constructor(props){
    super(props);
    this.performParentAction = this.performParentAction.bind(this);
    this.state = {activeItem:this.props.selectedTab};
  }

  performParentAction(tag){
    this.props.trigger(tag);
    this.setState({activeItem:tag});
  }

  render(){

    var bountyList = this.props.info.map((bounty, index) => {
      if(this.state.activeItem == bounty.tag){
        return (<ListItem key={index} active={true} index={index} title={bounty.title} icon={bounty.icon} tag={bounty.tag} action={this.performParentAction} />);
      }
      return (<ListItem key={index} active={false} index={index} title={bounty.title} icon={bounty.icon} tag={bounty.tag} action={this.performParentAction} />);
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
  selectedTab: PropTypes.string
};

export default BountyHeader;
