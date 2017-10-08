import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.onRootClick(this.props.value);
  }

  render(){
    var imgSrc = `../../static/images/${this.props.icon}`;
    return (
      <div>
        <a href="#" onClick={this.handleClick}>
          <img src={imgSrc} />
        </a>
        <p className="bounty-title">{this.props.title}</p>
      </div>
    );
  }
}

Button.propTypes = {
  onRootClick: PropTypes.func,
  value: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string
};

export {
  Button
};
