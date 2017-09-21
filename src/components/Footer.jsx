import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Footer extends Component {
  render(){
    return (
      <div>
        <h1>This is a footer</h1> 
        <SocialMediaBar />
      </div>
    )
  }
}

class SocialMediaBar extends Component {
  render(){
    return (
      <div>
        <h2>Social Media Bar</h2>
        <ul>
          <SocialMediaIcon name="reddit" link="http://reddit.com" />
          <SocialMediaIcon name="twitter" link="http://twitter.com" />
        </ul>
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
  name: PropTypes.string,
  link: PropTypes.string
}

export {
  Footer,
  SocialMediaBar
}