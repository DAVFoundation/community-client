import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  render(){
    return (
      <div className="text-center">
        <SocialMediaBar />
        <CopyrightInfo />
      </div>
    );
  }
}

class SocialMediaBar extends Component {

  constructor(props){
    super(props);

    this.socialLinks = [
      {
        name: "reddit",
        link: "http://reddit.com"
      },
      {
        name: "twitter",
        link: "http://twitter.com"
      }
    ];
  }

  render(){

    var linkList = this.socialLinks.map(function(media, index){
      return <SocialMediaIcon key={index} name={media.name} link={media.link} />;
    });

    return (
      <div>
        <ul className="list-inline">{linkList}</ul>
      </div>
    );
  }
}

class SocialMediaIcon extends Component {

  render(){
    return (
      <li className='list-inline-item'>
        <a href={this.props.link} target="_blank">
          {this.props.name}
        </a>
      </li>
    );
  }
}

SocialMediaIcon.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

class CopyrightInfo extends Component {
  render(){
    return (
      <h6>Copyright DAV 2017</h6>
    );
  }
}

export {
  Footer,
  SocialMediaBar
};
