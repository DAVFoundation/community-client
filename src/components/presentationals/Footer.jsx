import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../static/css/Footer.css';

class Footer extends Component {
  render(){
    return (
      <div id="footer" className="col-md-12 text-center">
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
      },
      {
        name: "facebook",
        link: "http://facebook.com"
      },
      {
        name: "telegram",
        link: "http://telegram.com"
      },
      {
        name: "slack",
        link: "http://slack.com"
      },
      {
        name: "youtube",
        link: "http://youtube.com"
      }
    ];
  }

  render(){

    var linkList = this.socialLinks.map(function(media, index){
      return <SocialMediaIcon key={index} name={media.name} link={media.link} />;
    });

    return (
      <div>
        <ul id="social-list" className="list-inline">{linkList}</ul>
      </div>
    );
  }
}

class SocialMediaIcon extends Component {

  render(){
    var imgSrc = `../../static/images/social-icons/${this.props.name.toLowerCase()}.png`;
    return (
      <li className='list-inline-item'>
        <a href={this.props.link} target="_blank">
          <img src={imgSrc} />
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
      <div>
        <h6 className="copyright">&copy; Copyright 2017 DAV - All Rights Reserved -- DAV is a registered nonprofit in Zug, Switzerland</h6>
        <ul className="list-inline copyright">
          <li className='list-inline-item'>
            <a href="#">Privacy Policy</a>
          </li>
          <li className='list-inline-item'>
            <a href="#">Terms and Conditions</a>
          </li>
        </ul>
      </div>
    );
  }
}

export {
  Footer,
  SocialMediaBar
};
