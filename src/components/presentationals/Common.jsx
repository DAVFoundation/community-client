import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.onRootClick(this.props.value);
  }

  render(){
    var imgSrc = `../../static/images/${this.props.icon}`;
    return (
      <div>
        <a href="#" onClick={this.handleClick}>
          <img src={imgSrc} />
        </a>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

class ListItem extends Component {
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
    this.doNothing = this.doNothing.bind(this);
  }

  click(){
    this.props.action(this.props.tag);
  }

  doNothing(){
    return;
  }


  render(){
    let checkmark = null;
    let button = <Button onRootClick={this.click} title={this.props.title} value={this.props.tag} icon={this.props.icon}/>;
    if(this.props.completed){
      checkmark = <div className='li-completed'></div>;
      button = <Button onRootClick={this.doNothing} title={this.props.title} value={this.props.tag} icon={this.props.icon}/>;
    }
    return(
      <li className={"list-inline-item text-center " + (this.props.active ? "active":"") + (this.props.completed ? " completed":"")}>
        <div className="li-hover"></div>
        {checkmark}
        {button}
      </li>
    );
  }
}

Button.propTypes = {
  onRootClick: PropTypes.func,
  value: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  action: PropTypes.func,
  tag: PropTypes.string,
  index: PropTypes.number,
  active: PropTypes.bool,
  completed: PropTypes.bool
};


export {
  Button,
  ListItem
};
