import React, { Component } from 'react';
import { Anchor } from 'antd';
import './Footer.css';

const { Link } = Anchor;

class Footer extends Component {    
  render() {
    return (
      <footer>
        <Anchor className="anchor">
          <p>Created by</p>
          <Link href="https://github.com/overkektus" title="overkektus"/>
        </Anchor>
      </footer>
    );
  }
}
 
export default Footer;
