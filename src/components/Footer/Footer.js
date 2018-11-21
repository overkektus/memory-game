import React, { Component } from 'react';
import { Icon } from 'antd';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>
          <li>
            <a href='https://github.com/overkektus'>
              <Icon type='github' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/egor-piskunov-a7853a142/'>
              <Icon width='2em' type='linkedin' />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
