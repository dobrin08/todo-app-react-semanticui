import React from 'react';
import { Menu } from 'semantic-ui-react'

class Header extends React.Component {
  render() {
    return (
      <div>
        <Menu inverted>
          <Menu.Item header>TODO's</Menu.Item>
          <Menu.Item
            position='right'>
              { this.props.itemsDone > 0 ? 'Items Done: ' + this.props.itemsDone + ' | ': null } Total Tasks: { this.props.totalTasks }
          </Menu.Item>
         </Menu>
       </div>
    )
  }
}

export default Header;
