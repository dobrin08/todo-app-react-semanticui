import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react'

class TodoItems extends Component {
  createTasks = item => {
    return (
      <List.Item key={item.key}>
        <List.Content>
          <input
            type="checkbox"
            onChange={(event) => this.props.handleChange(item.key, event)} />

          <span style={{ textDecoration: item.completed ? "line-through" : ""}}>
            {item.text}
          </span>
        </List.Content>

        <Button size='mini' color='red' onClick={() => this.props.deleteItem(item.key)}>Remove</Button>
      </List.Item>
    )
  }

  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    return <List divided className="list-todos">{listItems}</List>
  }
}

export default TodoItems;
