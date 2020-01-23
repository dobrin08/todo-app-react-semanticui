import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import * as PropTypes from "prop-types";
import CSS from './header.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={CSS.header}>
        <Menu inverted className={`${CSS.headerMenu}`}>
          <Menu.Item header>TODO's</Menu.Item>
          <Menu.Item position='right'>
            {`Total Tasks: ${this.props.totalTasks} | Items Done: ${this.props.itemsDone}`}
          </Menu.Item>
        </Menu>
      </header>
    )
  }
}

Header.propTypes = {
  totalTasks: PropTypes.number,
  itemsDone: PropTypes.number,
};

Header.defaultProps = {
  totalTasks: 0,
  itemsDone: 0,
};

export default Header;
