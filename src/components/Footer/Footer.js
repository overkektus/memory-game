import React, { Component } from 'react'
import githubLogo from 'src/assets/socials/github.svg'
import linkedinLogo from 'src/assets/socials/linkedin.svg'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul className="footer__socials">
          <li className="footer__social-item">
            <a href="https://github.com/overkektus">
              <img className="footer__social-logo" src={githubLogo} alt="github logo" />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="https://www.linkedin.com/in/egor-piskunov-a7853a142/">
              <img className="footer__social-logo" src={linkedinLogo} alt="linkedin logo" />
            </a>
          </li>
        </ul>
      </footer>
    )
  }
}

export default Footer
