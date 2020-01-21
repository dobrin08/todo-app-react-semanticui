import React from 'react';
import { Menu } from 'semantic-ui-react'

const Header = ({ totalTasks, itemsDone }) => (
  <div>
    <Menu inverted>
      <Menu.Item header>TODO's</Menu.Item>
      <Menu.Item position='right'>
        {`Total Tasks: ${totalTasks} | Items Done: ${itemsDone}`}
      </Menu.Item>
    </Menu>
  </div>
);

export default Header;
