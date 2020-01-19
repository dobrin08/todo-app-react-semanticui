import React, { Component } from 'react'
import { Button, List, Icon } from 'semantic-ui-react'

class TodoItems extends Component {
  createTasks = item => {
    return (
      <List.Item key={item.key}>
        <List.Content floated='right'>
          <Button
            size='mini'
            color='green'
            icon
            onClick={() => this.props.setItemDone(item.key)}
          >
            <Icon name='check' />
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
            onChange={(event) => this.props.handleChange(item.key, event)} />

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
