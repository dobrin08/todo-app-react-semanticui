import React, { Component } from 'react'
import { Button, List, Icon } from 'semantic-ui-react'

class TodoItems extends Component {
  createTasks = item => {
    return (
      <List.Item key={item.key}>
        <List.Content floated='right'>
          <Button
            size='mini'
            color={item.completed ? 'yellow' : 'green'}
            icon
            onClick={() => this.props.setItemDone(item.key)}
          >
            <Icon name={item.completed ? 'undo' : 'check'} />
          </Button>

          <Button
            size='mini'
            color='red'
            icon
            onClick={() => this.props.deleteItem(item.key)}
          >
            <Icon name='trash' />
          </Button>
        </List.Content>

        <List.Content>
          <input
            type="checkbox"
            checked={item.selected}
            onChange={e => this.props.handleChange(item.key, e.target.checked)} />

          <span style={{ textDecoration: item.completed ? "line-through" : ""}}>
            {item.text}
          </span>
        </List.Content>
      </List.Item>
    )
  }

  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    return <List divided verticalAlign='middle' className='list-todos'>{listItems}</List>
  }
}

export default TodoItems;
