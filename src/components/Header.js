import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import * as PropTypes from "prop-types";
import BulkDelete from "./BulkDelete";

class Header extends Component {
  render() {
    return (
      <div>
        <Menu inverted>
          <Menu.Item header>TODO's</Menu.Item>
          <Menu.Item position='right'>
            {`Total Tasks: ${this.props.totalTasks} | Items Done: ${this.props.itemsDone}`}
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

BulkDelete.propTypes = {
  totalTasks: PropTypes.number,
  itemsDone: PropTypes.number,
};

BulkDelete.defaultProps = {
  totalTasks: 0,
  itemsDone: 0,
};

export default Header;
