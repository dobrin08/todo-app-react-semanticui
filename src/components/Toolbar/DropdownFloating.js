import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'done', icon: 'check', text: 'Mark as Done', value: 'done' },
  { key: 'delete', icon: 'delete', text: 'Delete selected', value: 'delete' },
]

function DropdownFloating() {
  const optionsItems = options.map((item) =>
    <Dropdown.Item key={item.key}>{item.text}</Dropdown.Item>
  );

  return (
    <Dropdown
      text='Actions'
      floating
      button
    >
      <Dropdown.Menu>
        {optionsItems}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownFloating;
