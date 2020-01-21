import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import * as PropTypes from "prop-types";

class Header extends Component {
  render() {
    return (
      <Menu inverted>
        <Menu.Item header>TODO's</Menu.Item>
        <Menu.Item position='right'>
          {`Total Tasks: ${this.props.totalTasks} | Items Done: ${this.props.itemsDone}`}
        </Menu.Item>
      </Menu>
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
