import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Footer extends Component {
  render(){
    return (
      <div>
        <SocialMediaBar />
        <CopyrightInfo />
      </div>
    )
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
    ]
  }

  render(){

    var linkList = this.socialLinks.map(function(media, index){
      return <SocialMediaIcon key={index} name={media.name} link={media.link} />
    })

    return (
      <div>
        <ul>{linkList}</ul>
      </div>
    )
  }
}

class SocialMediaIcon extends Component {

  render(){
    return (
      <li>
        <a href={this.props.link}>
          {this.props.name}
        </a>
      </li>
    )
  }
}

SocialMediaIcon.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

class CopyrightInfo extends Component {
  render(){
    return (
      <h5>Copyright DAV 2017</h5>
    )
  }
}

export {
  Footer,
  SocialMediaBar
}