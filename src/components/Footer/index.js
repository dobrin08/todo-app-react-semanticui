import React, {Component} from 'react';
import {Icon} from "semantic-ui-react";
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer
        className="footer"
        inverted
      >
        <a href="https://github.com/dobrin08/todo-app-react-semanticui" target="_blank" rel="noopener noreferrer">
          <Icon name='github'/>
        </a>
      </footer>
    )
  }
}

export default Footer;
