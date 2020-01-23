import React, {Component} from 'react';
import {Icon} from "semantic-ui-react";
import CSS from './footer.module.scss';

class Footer extends Component {
  render() {
    return (
      <footer
        className={CSS.footer}
        inverted
      >
        <a href="https://github.com/dobrin08/todo-app-react-semanticui" target="_blank">
          <Icon name='github'/>
        </a>
      </footer>
    )
  }
}

export default Footer;
