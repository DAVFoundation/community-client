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
        link: "https://goo.gl/YHKG6S"
      },
      {
        name: "twitter",
        link: "https://goo.gl/qxwzxk"
      },
      {
        name: "facebook",
        link: "https://goo.gl/v1XmV5"
      },
      {
        name: "telegram",
        link: "https://goo.gl/cdWnCi"
      },
      {
        name: "github",
        link: "https://goo.gl/vLiZYy"
      },
      {
        name: "gitter",
        link: "https://goo.gl/xvar7D"
      },
      {
        name: "youtube",
        link: "https://www.youtube.com/channel/UCPuAOygDwCiLOdLosiQJJ1w"
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
      </div>
    );
  }
}

class PrivacyLinks extends Component {
  render(){
    return(
      <div>
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
